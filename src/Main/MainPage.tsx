import { Route } from "react-router";
import { Routes } from "react-router";
import Home from "./Home";
import Students from "./Students";
import Group from "./Group";
import Product from "./Product";
import Catigories from "./Catigories";
import Buyurtma from "./Buyurtma";

function MainPage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Students />} />
        <Route path="/groups" element={<Group />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/catigories" element={<Catigories />} />
        <Route path="/buyurtma" element={<Buyurtma />} />


      </Routes>
    </div>
  );
}

export default MainPage;
