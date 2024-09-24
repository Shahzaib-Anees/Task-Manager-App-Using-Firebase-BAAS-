import React, { useRef, useState } from "react";
import { FaUserAlt, FaArrowUp } from "react-icons/fa";
import {
  signUpUser,
  addDatainDb,
  uploadImage,
  imageDownloadUrl,
} from "../../configs/firebase/firebaseMethods";
import { auth } from "../../configs/firebase/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorHandler from "../../components/ErrorHandler/ErrorHandler";
import "./signUp.css";

function SignUp() {
  const navigate = useNavigate();
  const userName = useRef();
  const userEmail = useRef();
  const userPassword = useRef();
  const userImage = useRef();
  const [state, setState] = useState(false);
  const [ifError, setIfError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  let profileImage =
    "https://firebasestorage.googleapis.com/v0/b/todo-backend-bcd23.appspot.com/o/userImages%2Fmale_avatar-removebg-preview.png?alt=media&token=0edeea48-5455-4b4b-a1bb-274db3251ef9";

  // Sign Up
  const getSignUpCredentails = async (evt) => {
    evt.preventDefault();
    setErrorMsg(null);
    const userNameValue = userName.current.value;
    const userEmailValue = userEmail.current.value;
    const userPasswordValue = userPassword.current.value;
    const userImageValue = userImage.current.files[0];
    const signUpButton = evt.target.childNodes[6].firstChild;
    console.log(userImageValue);

    try {
      signUpButton.setAttribute("disabled", "true");
      signUpButton.classList.add("bg-gray-400");
      signUpButton.innerText = "Loading...";
      setState(true);
      const signUp = await signUpUser(auth, userEmailValue, userPasswordValue);
      console.log(signUp);
      const uploadImageToFirebase = await uploadImage(
        "userImages",
        userImageValue,
        userImageValue.name
      );

      console.log(uploadImageToFirebase);
      const url = await imageDownloadUrl("userImages", userImageValue.name);
      profileImage = url;

      const addtoDatabase = await addDatainDb("users", signUp.uid, {
        name: userNameValue,
        email: userEmailValue,
        password: userPasswordValue,
        image: profileImage,
      });

      console.log(addtoDatabase);
    } catch (error) {
      console.log(error);
      setIfError(true);
      setErrorMsg(error);
      console.log(errorMsg);
    } finally {
      userName.current.value = "";
      userEmail.current.value = "";
      userPassword.current.value = "";
      userImage.current.value = "";
      signUpButton.removeAttribute("disabled");
      signUpButton.classList.remove("bg-gray-400");
      signUpButton.innerText = "Sign Up";
      navigate(`/Profile/${auth.currentUser.uid}`);
    }
  };

  return (
    <>
      <div className="mt-20 sm:mx-auto sm:w-full lg:w-[35rem] md:w-[32rem] box-content">
        <form
          id="form"
          className="space-y-6 p-6 py-8 rounded-md"
          method="POST"
          onSubmit={getSignUpCredentails}
        >
          <h1 className="text-3xl text-[#3c3c3c] text-center font-bold">
            Register
          </h1>
          {ifError ? (
            <div key={errorMsg}>
              <ErrorHandler error={errorMsg} />
            </div>
          ) : null}
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Full Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                ref={userName}
                required
                className="input block w-full rounded-md border-0 outline-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6
                px-2"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                ref={userEmail}
                required
                className="input block w-full rounded-md border-0 outline-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6
                px-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                ref={userPassword}
                required
                className="input block w-full rounded-md border-0 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6
                px-2"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Profile Image
            </label>
            <div className="mt-2">
              <input
                type="file"
                className="file-input file-input-bordered file-input-md w-full max-w-xs m-1 mt-2 mb-2"
                accept="image/*"
                ref={userImage}
              />
            </div>
          </div>
          <p className="text-[12px] font-bold p-1">
            Already have an account ?
            <Link to="/SignInAuth" className="py-[4px] px-[6px] bg-[#ededed]">
              Log In
            </Link>
          </p>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#4482F6] px-3 py-1.5 mt-4 text-lg font-bold leading-6 text-white shadow-sm "
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      {state ? <Loader /> : null}
    </>
  );
}

export default SignUp;
