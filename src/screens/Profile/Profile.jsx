import React, { useEffect } from "react";
import { useParams , useNavigate } from "react-router-dom";
import { getSingleData } from "../../configs/firebase/firebaseMethods";
// import {auth , onAuthStateChanged} from "../../configs/firebase/firebaseMethods";
function Profile() {
  const { id } = useParams();
  const  navigate = useNavigate();
  useEffect(() => {
    const getuserData = async () => {
      const data = await getSingleData("users", id);
      if(data){
        console.log(data);
      }else{
        navigate("/SignInAuth");
      }

    };
    getuserData();
  }, []);
  return <></>;
}

export default Profile;
