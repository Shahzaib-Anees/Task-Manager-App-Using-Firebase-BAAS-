import React from 'react'
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar.jsx";
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
