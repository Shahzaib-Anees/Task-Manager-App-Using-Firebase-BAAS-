import { Outlet } from "react-router-dom";
import "./ProfileAdminTaskManager.css";
function ProfileAdminTaskManager() {
  return (
    <>
      <div className="w-[50%]">
        <Outlet />
      </div>
    </>
  );
}

export default ProfileAdminTaskManager;
