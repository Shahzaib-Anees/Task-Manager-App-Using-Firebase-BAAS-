// import React from 'react'
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Navbar />
      <Loader />
      <Outlet />
    </>
  );
}

export default Layout;
