import { Table, Switch } from "antd";
import { Button } from "antd";
import { useState } from "react";
import { Groups } from "../Types";
import useMyStore from "../Store/Store";
import ModalGroup from "../Modal-Group";
function Group() {
  const group = useMyStore<Groups[]>((state) => state.group);
  const [modal, setModal] = useState(false);

  return (
    <div className="relative w-full">
      <p className="font-bold text-2xl p-3">Group</p>
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
            title: "Nomi",
            dataIndex: "guruh_name",
          },

          {
            title: "Faolligi",
            dataIndex: "active",
            render: (active, all) => {
              return (
                <Switch
                  checked={active}
                  onChange={(check) => {
                    const new_group = group.map((item) => {
                      if (item.id === all.id) {
                        return {
                          ...item,
                          active: check,
                        };
                      }
                      return item;
                    });
                    useMyStore.setState({
                      group: new_group,
                    });
                  }}
                />
              );
            },
          },

          {
            title: "Student-Count",
            dataIndex: "students_count",
          },
          {
            title: "Delate and Edit",
            render: (all) => {
              return (
                <div className=" flex gap-2">
                  <Button
                    style={{ background: "red", color: "white" }}
                    onClick={() => {
                      const new_students = group.filter((i) => {
                        if (i.id !== all.id) {
                          return i;
                        }
                      });
                      useMyStore.setState({ group: new_students });
                    }}
                  >
                    Delate
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => {
                      
                    }}
                  >
                    Edit
                  </Button>
                </div>
              );
            },
          },
        ]}
        dataSource={group}
      />

      {modal ? <ModalGroup setModal={setModal} modal={modal} /> : null}
    </div>
  );
}

export default Group;
