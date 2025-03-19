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

export type product_type = {
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
