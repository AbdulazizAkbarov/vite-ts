import Input from "antd/es/input/Input";
import { Form, Switch, Drawer } from "antd";
import { Button } from "antd";
import useMyStore from "./Store/Store";

function getRandom() {
  return Math.floor(Math.random() * 1000);
}

function Modal({ setModal, modal }: any) {
  // const students = useMyStore((s) => s.students);
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
