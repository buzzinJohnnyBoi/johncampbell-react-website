import React from "react";
import {Outlet} from "react-router-dom";
import Nav from "../componets/nav";
import Footer from "../componets/footer";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Nav />
      <Footer />
    </>
  );
};

export default Layout;