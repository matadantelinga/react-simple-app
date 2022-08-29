import React from "react";
import {Outlet} from "react-router-dom";
import Header from "./Header";
import "../styles/layout.scss";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;