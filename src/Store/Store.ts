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
        },
      ],
      group:[
        {
          id:getRandom(),
          firstName:"Abdulaziz",
          active:true,
          students_count:12
        }
      ]
    };
  });

  export default useMyStore