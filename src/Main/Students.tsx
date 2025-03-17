import { Table, Switch } from "antd";
import { Button } from "antd";
import { useState } from "react";
import { Groups, Student } from "../Types";
import Modal from "../Modal";
import useMyStore from "../Store/Store";
function Students() {
  const students = useMyStore<Student[]>((state) => state.students);
  const group = useMyStore<Groups[]>((state) => state.group);

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
          width: "1200px",
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
            title: "Guruh",
            dataIndex: "guruh_id",
            render: (guruh_id) => {
              const s = group.find((a) => {
                return a.id === guruh_id;
              });
              return s?.guruh_name;
            },
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

          {
            title: "Delate and Edit",
            render: (all) => {
              return (
                <div className=" flex gap-2">
                  <Button
                    style={{ background: "red", color: "white" }}
                    onClick={() => {
                      const new_students = students.filter((i) => {
                        if (i.id !== all.id) {
                          return i;
                        }
                      });
                      useMyStore.setState({ students: new_students });
                    }}
                  >
                    Delate
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => {
                      setModal(true);
                    }}
                  >
                    Edit
                  </Button>
                </div>
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

export default Students;
