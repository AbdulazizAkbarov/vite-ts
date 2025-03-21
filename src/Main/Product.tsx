import { Button, Table } from "antd";
import { useState } from "react";
import useMyStore from "../Store/Store";
import ModalGroup from "../ModalProduct";

function Product() {
  const [modal2, setModal2] = useState(false);
  const product1 = useMyStore((state) => state.product);
  const catigory = useMyStore((state) => state.catigories);

  return (
    <div>
      <h2 className="font-bold text-2xl p-3">Products</h2>

      <Button
        className="mt-6 ml-[1200px] mb-4"
        type="primary"
        onClick={() => {
          setModal2(true);
        }}
      >
        Qosish
      </Button>

      <Table
        columns={[
          {
            title: "ID",
            dataIndex: "id",
          },
          {
            title: "Name",
            dataIndex: "name",
          },
          {
            title: "Narxi",
            dataIndex: "narxi",
          },
          {
            title: "Catigory",
            dataIndex: "catigories_id",
            render: (catigories_id) => {
              const s = catigory.find((a) => {
                return a.id === catigories_id;
              });
              return s?.name;
            },
          },
        ]}
        dataSource={product1}
      />
      {modal2 ? <ModalGroup setModal2={setModal2} modal2={modal2} /> : null}
    </div>
  );
}

export default Product;
