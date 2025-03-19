import { Drawer, Form, Input, Button, Select } from "antd";
import useMyStore from "./Store/Store";

function getRandom() {
  return Math.floor(Math.random() * 1000);
}

function Modal({ setOpen, modal2, setModal2 }: any) {
  const [form] = Form.useForm();
  const catigory = useMyStore((s) => s.catigories);


  const onSubmit = (values: any) => {
    useMyStore.setState((state) => ({
      product: [...state.product, { ...values, id: getRandom() }],
    }));

    form.resetFields();
    if (setOpen) setOpen(false);
    if (setModal2) setModal2(false);
  };

  return (
    <Drawer
      title="User Qo‘shish"
      width={400}
      onClose={() => {
        form.resetFields();
        if (setOpen) setOpen(false);
        if (setModal2) setModal2(false);
      }}
      open={modal2}
    >
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        <Form.Item label="Nomi" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="Narxi" name="narxi">
          <Input type="number" />
        </Form.Item>

       

        <Form.Item label="Guruh nomi" name="catigories_id">
        <Select options={catigory.map((i)=>{
            return{
              value: i.id, label: i.name 
            }
          })}/>
        </Form.Item>

        <Form.Item>
          <Button
            onClick={() => form.submit()}
            type="primary"
            className="w-full"
          >
            Qo‘shish
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}

export default Modal;
