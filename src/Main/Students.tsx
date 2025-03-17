import { Table, Switch} from "antd";
import { Button } from "antd";
import { useState } from "react";
import { Student } from "../Types";
import Modal from "../Modal"
import useMyStore from "../Store/Store";
function Students() {
    const students = useMyStore<Student[]>((state) => state.students);
    const [modal, setModal] = useState(false);
  
    return (
      <div className="relative w-full">
        <p className="font-bold text-2xl p-3">Students</p>
        <Button
          className="mt-6 ml-[1200px] mb-4"
          type="primary"
          onClick={() => {
            setModal(true);
          }}
        >
          Qoshish
        </Button>
        <Table
        style={{
          width:"1200px"
        }}
          className="  mx-auto"
          columns={[
            {
              title: "ID",
              dataIndex: "id",
            },
            {
              title: "Ism",
              dataIndex: "firstName",
            },
            {
              title: "Familya",
              dataIndex: "lastName",
            },
            {
              title: "Yoshi",
              dataIndex: "age",
            },
            {
              title: "Faolligi",
              dataIndex: "active",
              render: (active, all) => {
                return (
                  <Switch
                    checked={active}
                    onChange={(check) => {
                      const new_students = students.map((item) => {
                        if (item.id === all.id) {
                          return {
                            ...item,
                            active: check,
                          };
                        }
                        return item;
                      });
                      useMyStore.setState({
                        students: new_students,
                      });
                    }}
                  />
                );
              },
            },
          ]}
          dataSource={students}
        />
  
        {modal ? <Modal setModal={setModal} modal={modal} /> : null}
      </div>
    );
}

export default Students