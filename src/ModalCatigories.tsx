import { Drawer, Form, Input, Button } from "antd";
import useMyStore from "./Store/Store";

function getRandom() {
  return Math.floor(Math.random() * 1000);
}

function ModalCatigories({ setOpen, modal3, setModal3 }: any) {
  const [form] = Form.useForm();

  const onSubmit = (values: any) => {
    useMyStore.setState((state) => ({
      catigories: [...state.catigories, { ...values, id: getRandom() }],
    }));

    form.resetFields();
    if (setOpen) setOpen(false);
    if (setModal3) setModal3(false);
  };

  return (
    <Drawer
      title="User Qo‘shish"
      width={400}
      onClose={() => {
        form.resetFields();
        if (setOpen) setOpen(false);
        if (setModal3) setModal3(false);
      }}
      open={modal3}
    >
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        <Form.Item label="Nomi" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="Rasmi" name="rasm">
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

export default ModalCatigories;
