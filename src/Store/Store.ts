import { create } from "zustand";
function getRandom() {
  return Math.floor(Math.random() * 1000);
}
const useMyStore = create(() => {
  return {
    students: [
      {
        id: getRandom(),
        firstName: "Abdulaziz",
        lastName: "Akbarov",
        age: 18,
        active: true,
        guruh_id:1
      },
    ],
    group: [
      {
        id: getRandom(),
        guruh_name: "Guruh1",
        active: true,
        students_count: 12,
      },
      {
        id: getRandom(),
        guruh_name: "Guruh2",
        active: true,
        students_count: 13,
      },
    ],
  };
});

export default useMyStore;
