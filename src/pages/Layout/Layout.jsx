import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Header/NavBar/navbar";
import Footer from "../../components/footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
