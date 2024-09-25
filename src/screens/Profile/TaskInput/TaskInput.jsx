import React, { useRef, useState, useEffect } from "react";
import "./TaskInput.css";
import { auth } from "../../../configs/firebase/firebaseConfig";
import { updateDocument } from "../../../configs/firebase/firebaseMethods";
import { useParams } from "react-router-dom";
function TaskInput({ userId }) {
  const { id } = useParams();
  const taskRef = useRef();
  const [userData, setUserData] = useState(null);
  const [task, setTask] = useState([]);
  useEffect(() => {
    const data = (async () => {
      const response = await updateDocument("users", id, {
        "tasks.allTask": [...task],
        "tasks.pendingTask": [...task],
      });
      console.log(response);
    })();
  }, [task]);
  const getInputTask = async (e) => {
    e.preventDefault();
    const newTask = taskRef.current.value;
    task.push(newTask);
    setTask([...task]);
    taskRef.current.value = "";
  };
  return (
    <>
      <div className="form-container flex flex-col gap-4">
        <form
          onSubmit={getInputTask}
          className="form flex gap-2 items-center justify-center"
        >
          <input
            type="text"
            ref={taskRef}
            placeholder="Enter Task"
            className="input-field"
          />
          <button
            type="submit"
            className="task-adder bg-[#4482F6] w-[fit-content] text-[#fff] lg:text-[1.1rem] font-bold px-[10px] py-[5px] outline-none rounded"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            }}
          >
            Add Task
          </button>
        </form>
      </div>
    </>
  );
}

export default TaskInput;
