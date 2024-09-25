import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import ImageUploader from "../ImageUploader/ImageUploader";
import TaskManager from "../TaskManager/TaskManager";
import { auth } from "../../../../configs/firebase/firebaseConfig";
import {
  FaRectangleList,
  FaCheckDouble,
  FaHourglassStart,
  FaPowerOff,
} from "react-icons/fa6";

function Dashboard({ name }) {
  const currentUserId = `${auth.currentUser.uid}`;
  const addClassToLink = (evt) => {
    evt.target.classList.add("active");
  };
  return (
    <>
      <article id="user-dashboard" className="flex w-full h-full">
        <div
          className="flex flex-col items-center justify-center py-3 w-[30%]"
          style={{
            border: "1px solid #000",
          }}
        >
          <ImageUploader />
          <h1 className="text-[18px] font-bold">{name}</h1>
          <ul className="dashboard-nav-list flex flex-col">
            <li>
              <Link
                onMouseEnter={addClassToLink}
                to={`/Profile/${currentUserId}/TaskManager/`}
                className="flex items-center justify-center gap-2"
              >
                <span>
                  <FaRectangleList className="ml-1" />
                  All
                </span>
              </Link>
            </li>
            <li>
              <Link to="" className="flex items-center justify-center gap-2">
                <span>
                  <FaCheckDouble className="ml-1" />
                  Completed
                </span>
              </Link>
            </li>
            <li>
              <Link to="" className="flex items-center justify-center gap-2">
                <span>
                  <FaHourglassStart className="ml-1" />
                  Pending
                </span>
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-center mt-2 pt-4">
            <button className="bg-[#e4e4e4] flex items-center text-[#727272] lg:text-[16px] font-bold px-6 py-1 outline-none rounded">
              <span>
                <FaPowerOff className="mr-2" />
              </span>
              Log Out
            </button>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center w-[60%] h-full p-3"
          style={{
            border: "1px solid #000",
          }}
        >
          <TaskManager />
        </div>
      </article>
    </>
  );
}

export default Dashboard;
