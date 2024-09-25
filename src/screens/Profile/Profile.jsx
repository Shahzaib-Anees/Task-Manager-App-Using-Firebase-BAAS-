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
    const getUserData = async () => {
      try {
        const data = await getSingleData("users", id);
        if (data) {
          console.log(data);
          setData(data);
          localStorage.setItem("userImage", data.image);
        } else {
          navigate("/SignInAuth");
        }
      } catch (error) {
        console.log(error);
      } finally {
        // console.log(dataImage);
      }
    };
    getUserData();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <Dashboard name={data?.name} userId={id} />
      </div>
    </>
  );
}

export default Profile;
