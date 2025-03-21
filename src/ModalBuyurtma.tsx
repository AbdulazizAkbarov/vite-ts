import { Drawer, Form, Input, Button, Select } from "antd";
import useMyStore from "./Store/Store";

function getRandom() {
  return Math.floor(Math.random() * 1000);
}

function ModalBuyurtma({ setOpen, modal4, setModal4 }: any) {
  const [form] = Form.useForm();
  const students = useMyStore((s) => s.students);
  const product = useMyStore((s) => s.product);



  const onSubmit = (values: any) => {
    useMyStore.setState((state) => ({
      buyurtma: [...state.buyurtma, { ...values, id: getRandom() }],
    }));

    form.resetFields();
    if (setOpen) setOpen(false);
    if (setModal4) setModal4(false);
  };

  return (
    <Drawer
      title="User Qo‘shish"
      width={400}
      onClose={() => {
        form.resetFields();
        if (setOpen) setOpen(false);
        if (setModal4) setModal4(false);
      }}
      open={modal4}
    >
      <Form form={form} layout="vertical" onFinish={onSubmit}>
      <Form.Item label="Student Nomi" name="">
        <Select options={students.map((i)=>{
            return{
              value: i.id, label: i.firstName
            }
          })}/>
        </Form.Item>

        <Form.Item label="Mahsulot Nomi" name="mahsulot_id">
        <Select options={product.map((i)=>{
            return{
              value: i.id, label: i.name
            }
          })}/>
        </Form.Item>

        <Form.Item label="Mahsulot Soni" name="soni" >
          <Input type="number" />
        </Form.Item>


        <Form.Item label="Adress" name="address">
          <Input />
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

export default ModalBuyurtma;
