import { Button, Table } from 'antd';
import {useState} from 'react'
import ModalCatigories from '../ModalCatigories';
import useMyStore from '../Store/Store';

function Catigories() {
  const [modal3, setModal3] = useState(false);
  const catigoeries = useMyStore((state) => state.catigories);
  return (
    <div>
      <h2 className="font-bold text-2xl p-3">Catigories</h2>

      <Button
        className="mt-6 ml-[1200px] mb-4"
        type="primary"
        onClick={() => {
          setModal3(true);
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
            title: "Rasm",
            dataIndex: "rasm",
          },
          

        ]}
        dataSource={catigoeries}
      />
       {modal3 ? (
        <ModalCatigories
          setModal3={setModal3}
          modal3={modal3}
        //   setModal1={setModal1}
        //   modal1={modal1}
        />
      ) : null}
    </div>
  );
}

export default Catigories