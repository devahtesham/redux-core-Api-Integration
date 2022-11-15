import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoutes/PrivateRoute";

import Cart from "../pages/Cart";

import Home from "../pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      {/* <Route element={<PrivateRoute />}>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route> */}
    </Routes>
  );
};

export default Router;
