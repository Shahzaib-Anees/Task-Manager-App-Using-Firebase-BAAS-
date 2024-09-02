// import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <span
        className="loading loading-spinner loading-md fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden"
        id="loader" 
      ></span>
      <Outlet />
    </>
  );
}

export default App;
