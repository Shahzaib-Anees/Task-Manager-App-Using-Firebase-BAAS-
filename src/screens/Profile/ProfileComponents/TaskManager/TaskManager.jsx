import React from "react";
import TaskInput from "../../TaskInput/TaskInput";
import { Outlet } from "react-router-dom";
import TaskLayout from "./Manager/TaskLayout";
function TaskManager({ userId }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-[100%] h-full">
        <TaskInput userId={userId} />
        <div className="flex items-center justify-center w-[100%] h-full">
          <TaskLayout />
        </div>
      </div>
    </>
  );
}

export default TaskManager;
