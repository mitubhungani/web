import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/main/Home";
import Additems from "../pages/main/Additems";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Privetroute from "../components/Privetroute";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Privetroute><Home /></Privetroute>} />
        <Route path="/additem" element={<Privetroute><Additems /></Privetroute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
