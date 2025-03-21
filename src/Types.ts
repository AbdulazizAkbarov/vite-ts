export type Student = {
  firstName: string;
  lastName: string;
  age: number;
  active: boolean;
  id: number;
  guruh_id: number;
};

export type Groups = {
  id: number;
  guruh_name: string;
  active: boolean;
  students_count: number;
};

export type ProductType = {
  id: number;
  name: string;
  catigories_id: number;
  narxi: number;
};

export type Catigories = {
  id: number;
  name: string;
  img: string;
};
export type Buyurtma ={
  student_id:number
  mahsulot_id:number
  soni:number
  address:string
}