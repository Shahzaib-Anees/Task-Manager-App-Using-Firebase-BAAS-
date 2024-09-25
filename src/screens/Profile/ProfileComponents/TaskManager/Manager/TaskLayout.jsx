import React from "react";
import { Outlet } from "react-router-dom";
function TaskLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default TaskLayout;
