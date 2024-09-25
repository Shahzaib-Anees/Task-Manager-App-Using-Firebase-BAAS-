import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleData } from "../../configs/firebase/firebaseMethods";
import Dashboard from "./ProfileComponents/Dashboard/Dashboard";
import TaskManager from "./ProfileComponents/TaskManager/TaskManager";
function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  useEffect(() => {
    const data = (async () => {
      const response = await getSingleData("users", id);
      setData(response);
    })();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <Dashboard userId={id} name={data?.name} />
      </div>
    </>
  );
}

export default Profile;
