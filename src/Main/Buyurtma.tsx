import { Button, Table } from "antd";
import { useState } from "react";
import useMyStore from "../Store/Store";
import ModalBuyurtma from "../ModalBuyurtma";

function Buyurtma() {
  const [modal4, setModal4] = useState(false);
  const buyurtma = useMyStore((state) => state.buyurtma);
  console.log(buyurtma);
  

  return (
    <div>
      <h2 className="font-bold text-2xl p-3">Buyurtma</h2>

      <Button
        className="mt-6 ml-[1200px] mb-4"
        type="primary"
        onClick={() => {
          setModal4(true);
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
            title: "Student",
            dataIndex: "student_id",
          },
          {
            title: "Mahsulot",
            dataIndex: "mahsulot_id",
          },
          {
            title: "Soni",
            dataIndex: "soni",
          },
          {
            title: "Address",
            dataIndex: "address",
          },
        ]}
        dataSource={buyurtma}
      />
      {modal4 ? <ModalBuyurtma setModal4={setModal4} modal4={modal4} /> : null}
    </div>
  );
}

export default Buyurtma;
