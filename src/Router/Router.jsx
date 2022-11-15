import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoutes/PrivateRoute";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route element={<PrivateRoute />}>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default Router;
