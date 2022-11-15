import React from "react";
import Router from "../../Router/Router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
};

export default Layout;
