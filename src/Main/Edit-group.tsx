import { Drawer, Form, Input, Switch, Button } from "antd";
import useMyStore from "../Store/Store";
import { useEffect } from "react"

function getRandom() {
  return Math.floor(Math.random() * 1000);
}

function EditGroup({  modal1, setModal1,selectedGroup}: any) {
  const [form] = Form.useForm();

  const onSubmit = (values: any) => {
    useMyStore.setState((state) => ({
      group: [...state.group, { ...values, id: getRandom() }],
    }));

    form.resetFields();

    if (setModal1) setModal1(false);
  };

  useEffect(() => {
    form.setFieldsValue({guruh_name:selectedGroup.guruh_name, students_count: selectedGroup.students_count, active:selectedGroup.active})
  }, [])  

  return (
    <Drawer
      title="User Edit"
      width={400}
      onClose={() => {
        form.resetFields();
        if (setModal1) setModal1(false);
      }}
      
      open={modal1}
    >
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        <Form.Item label="Nomi" name="guruh_name">
        <Input/>
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

export default EditGroup;
