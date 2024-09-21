import { useEffect, useState } from "react";
import "./UserProfile.css";
import { db } from "../../../../FirebaseConfig/firebase.js";
import { doc, getDoc } from "firebase/firestore";
import UserProfileAdminPannel from "../UserProfileAdminPannel/UserProfileAdminPannel";
import SignUp from "../../SignUpAuth/SignUp";
import ProfileAdminTaskManager from "../ProfileAdminTaskManager/ProfileAdminTaskManager";
const currentUser = localStorage.getItem("currentUser");

function UserProfile() {
  const [userData, setUserData] = useState({});
  useEffect(async () => {
    const docRef = doc(db, "siteUsers", currentUser);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUserData(docSnap.data());
    } else {
      console.log("No such document!");
    }
    console.log(userData);
  }, []);
  return (
    <>
      <article className="profile-pannel-container flex items-center justify-center p-20 w-[100%] h-[90vh]">
        <article className="profile-pannel-content-container flex w-[65%] h-[100%]">
          {userData ? (
            <>
              <UserProfileAdminPannel
                src={userData.imageUrl}
                title={userData.name}
              />
              <ProfileAdminTaskManager/>
            </>
          ) : (
            <SignUp />
          )}
        </article>
      </article>
    </>
  );
}

export default UserProfile;
