import Input from "antd/es/input/Input";
import { Form, Switch, Drawer, Select } from "antd";
import { Button } from "antd";
import useMyStore from "./Store/Store";

function getRandom() {
  return Math.floor(Math.random() * 1000);
}

function Modal({ setModal, modal }: any) {
    const group = useMyStore((s) => s.group);

  const [form] = Form.useForm();

  const onSubmit = (val: any) => {
    console.log("Yangi talaba:", val); 

    useMyStore.setState((prev) => ({
      students: [...prev.students, { ...val, id: getRandom() }],
    }));

    console.log("Yangilangan students massivi:", useMyStore.getState().students);

    form.resetFields(); 
    setModal(false); 
  };

  return (
    <Drawer
      open={modal}
      width={500}
      onClose={() => {
        setModal(false);
      }}
    >

      <Form
        className="p-4"
        layout="vertical"
        form={form}
        onFinish={onSubmit}
      >
        <Form.Item 
          label="Ism" 
          name="firstName" 
        >
          <Input />
        </Form.Item>

        <Form.Item 
          label="Familya" 
          name="lastName" 
        >
          <Input />
        </Form.Item>

        <Form.Item 
          label="Yoshi" 
          name="age" 
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item 
          label="Faolligi" 
          name="active" 
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
        <Form.Item label="Guruh nomi" name="guruh_id">
        <Select options={group.map((i)=>{
            return{
              value: i.id, label: i.guruh_name 
            }
          })}/>
        </Form.Item>

        <Form.Item>
          <Button onClick={() => form.submit()} type="primary" className="w-full">
            Qo‘shish
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}

export default Modal;
