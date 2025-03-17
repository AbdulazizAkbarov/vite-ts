import { Drawer, Form, Input, Switch, Button } from "antd";
import useMyStore from "./Store/Store";

function getRandom() {
  return Math.floor(Math.random() * 1000);
}

function DrawerGroup({ setOpen, modal, setModal }: any) {
  // const students = useMyStore((s) => s.students);
  const [form] = Form.useForm();

  const onSubmit = (values: any) => {
    useMyStore.setState((state) => ({
      students: [...state.students, { ...values, id: getRandom() }],
    }));

    form.resetFields();
    if (setOpen) setOpen(false);
    if (setModal) setModal(false);
  };

  return (
    <Drawer
      title="User Qo‘shish"
      width={400}
      onClose={() => {
        form.resetFields();
        if (setOpen) setOpen(false);
        if (setModal) setModal(false);
      }}
      open={modal}
    >
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        <Form.Item label="Ism" name="firstName">
          <Input />
        </Form.Item>

        <Form.Item label="Students Count" name="students_count">
          <Input type="number" />
        </Form.Item>

        <Form.Item label="Faolligi" name="active" valuePropName="checked">
          <Switch />
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

export default DrawerGroup;
