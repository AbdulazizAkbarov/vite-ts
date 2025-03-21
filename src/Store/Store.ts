import { create } from "zustand";
import { Buyurtma, Catigories, Groups, Student, ProductType } from "../Types";
function getRandom() {
  return Math.floor(Math.random() * 1000);
}

type MyStoreType = {
  students: Student[];
  group: Groups[];
  product: ProductType[];
  catigories: Catigories[];
  buyurtma: Buyurtma[];
};
const useMyStore = create<MyStoreType>(() => {
  const student_id = getRandom();
  const mahsulot_id = getRandom();
  const initial: MyStoreType = {
    students: [
      {
        id: student_id,
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
    ],
    product: [
      {
        name: "Non",
        id: mahsulot_id,
        catigories_id: 65635,
        narxi: 32000,
      },
    ],
    catigories: [
      {
        name: "Non Mahsulotlari",
        id: getRandom(),
        img: "asdsdf",
      },
    ],
    buyurtma: [],
  };

  return initial;
});

export default useMyStore;
