import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors/Doctors";
import DoctoerDetailes from "../pages/Doctors/DoctoerDetailes";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctor" element={<Doctors />} />
        <Route path="/doctor/:id" element={<DoctoerDetailes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default Routers;
