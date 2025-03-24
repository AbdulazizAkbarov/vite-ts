import { Drawer, Form, Input, Button, Select, Radio } from "antd";
import useMyStore from "./Store/Store";
import { useState } from "react";

function getRandom() {
  return Math.floor(Math.random() * 1000);
}

function ModalBuyurtma({ setOpen, modal4, setModal4 }: any) {
  const [form] = Form.useForm();
  const students = useMyStore((s) => s.students);
  const product = useMyStore((s) => s.product);
  const [totalPrice, setTotalPrice] = useState(0);

  const onSubmit = (values: any) => {
    useMyStore.setState((state) => ({
      buyurtma: [...state.buyurtma, { ...values, id: getRandom() }],
    }));

    form.resetFields();
    setOpen?.(false);
    setModal4?.(false);
  };

  return (
    <Drawer
      title="User Qo‘shish"
      width={400}
      onClose={() => {
        form.resetFields();
        setOpen?.(false);
        setModal4?.(false);
      }}
      open={modal4}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onSubmit}
        onValuesChange={(_, all) => {
          const selectedProduct = product.find((p) => p.id === all.mahsulot_id);
          if (!selectedProduct || !all.soni) {
            setTotalPrice(0);
            return;
          }
          setTotalPrice(Number(all.soni) * selectedProduct.narxi);
        }}
      >
        <Form.Item label="Student Nomi" name="student_id">
          <Select
            options={students.map((i) => ({
              value: i.id,
              label: i.firstName,
            }))}
          />
        </Form.Item>

        <Form.Item label="Mahsulot Nomi" name="mahsulot_id">
          <Select
            options={product.map((i) => ({
              value: i.id,
              label: `${i.name}-${i.narxi.toLocaleString("ru")}`,
            }))}
          />
        </Form.Item>

        <div className="flex gap-2 justify-between items-center">
          <Form.Item label="Mahsulot Soni" name="soni">
            <Input
              type="number"
              onChange={(e) => {
                const value = Number(e.target.value) || 0;
                const selectedProduct = product.find(
                  (p) => p.id === form.getFieldValue("mahsulot_id")
                );
                if (!selectedProduct) {
                  setTotalPrice(0);
                  return;
                }
                setTotalPrice(value * selectedProduct.narxi);
              }}
            />
          </Form.Item>

          <div>{totalPrice.toLocaleString("ru")} so'm</div>
        </div>

        <Form.Item label="Adress" name="address">
          <Input />
        </Form.Item>

        <Form.Item label="Status" name="status">
          <Radio.Group
            options={[
              { label: "Qabul qilindi", value: "qabul_qilindi" },
              { label: "Yetkazib berilmoqda", value: "yetkazib_berilmoqda" },
              { label: "Tugatildi", value: "tugallandi" },
            ]}
            optionType="button"
            buttonStyle="solid"
          />
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

export default ModalBuyurtma;
