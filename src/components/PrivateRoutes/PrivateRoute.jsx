import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const islogin = localStorage.getItem("uid");
  return islogin ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoute;
