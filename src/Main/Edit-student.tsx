import Input from "antd/es/input/Input";
import { Form, Switch, Drawer, Select } from "antd";
import { Button } from "antd";
import useMyStore from "../Store/Store";
import { useEffect } from "react";

function getRandom() {
  return Math.floor(Math.random() * 1000);
}

function EditStudents({ setModal2, modal2,selectedStudent }: any) {
  const group = useMyStore((s) => s.group);

  const [form] = Form.useForm();

  const onSubmit = (val: any) => {
    console.log("Yangi talaba:", val);

    useMyStore.setState((prev) => ({
      students: [...prev.students, { ...val, id: getRandom() }],
    }));

    form.resetFields();
    setModal2(false);
  };

  useEffect(() => {
    form.setFieldsValue({
      firstName:selectedStudent.firstName,
      lastName: selectedStudent.lastName,
      active: selectedStudent.active,
      age:selectedStudent.age,
    });
  },[]);

  return (

    
    <Drawer
      open={modal2}
      width={500}
      onClose={() => {
        setModal2(false);
      }}
    >
      <Form className="p-4" layout="vertical" form={form} onFinish={onSubmit}>
        <Form.Item label="Ism" name="firstName">
          <Input />
        </Form.Item>

        <Form.Item label="Familya" name="lastName">
          <Input />
        </Form.Item>

        <Form.Item label="Yoshi" name="age">
          <Input type="number" />
        </Form.Item>

        <Form.Item label="Faolligi" name="active" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Guruh nomi" name="guruh_id">
          <Select
            options={group.map((i) => {
              return {
                value: i.id,
                label: i.guruh_name,
              };
            })}
          />
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

export default EditStudents;
