import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "../pages/Account";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Account />} />
      <Route path="/home" element={<Home />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
};

export default Router;
