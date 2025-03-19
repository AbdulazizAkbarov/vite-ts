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
        guruh_id: 1,
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
    product: [
      {
        name: "Non",
        id: getRandom(),
        catigories_id: 65635,
        narxi: 32000,
      },
    ],
    catigories: [
      {
        name: "Non Mahsulotlari",
        id: getRandom(),
        rasm: "asdsdf",
      },
      {
        name: "Don Mahsulotlari",
        id: getRandom(),
        rasm: "asdsdf",
      },
      {
        name: "Suv Mahsulotlari",
        id: getRandom(),
        rasm: "asdsdf",
      },
    ],
  };
});

export default useMyStore;
