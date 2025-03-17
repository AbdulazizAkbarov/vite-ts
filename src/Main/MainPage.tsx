import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router";
import Home from "./Home";
import Students from "./Students";
import Group from "./Group";

function MainPage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Students />} />
        <Route path="/groups" element={<Group />} />
      </Routes>
    </div>
  );
}

export default MainPage;
