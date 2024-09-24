import React, { useRef, useState } from "react";
import "./signIn.css";
import { Link, useNavigate } from "react-router-dom";
import { signInUser } from "../../configs/firebase/firebaseMethods";
import { auth } from "../../configs/firebase/firebaseConfig";
import Loader from "../../components/Loader/Loader";
function SignIn() {
  const navigate = useNavigate();
  const userEmail = useRef();
  const userPassword = useRef();
  const [ifError, setIfError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const getSignInCredentails = async (evt) => {
    evt.preventDefault();
    const signInBtn = evt.target.childNodes[3].firstChild;
    try {
      const email = userEmail.current.value;
      const password = userPassword.current.value;
      signInBtn.setAttribute("disabled", "true");
      signInBtn.classList.add("bg-gray-400");
      signInBtn.innerText = "Loading...";
      const user = await signInUser(email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    } finally {
      userEmail.current.value = "";
      userPassword.current.value = "";
      signInBtn.removeAttribute("disabled");
      signInBtn.classList.remove("bg-gray-400");
      signInBtn.innerText = "Sign In";
      const userUid = auth.currentUser.uid;
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
          onSubmit={getSignInCredentails}
        >
          <h1 className="text-3xl text-[#3c3c3c] text-center font-bold">
            Sign In
          </h1>
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
            <div className="flex justify-between items-center py-1 my-0">
              <p className="mt-1 text-[12px]">
                Don&#769;t have an account ?
                <Link
                  to="/SignUpAuth"
                  id="sign-up-path"
                  className="font-bold text-[13px] p-1 bg-[#f2f2f2]"
                >
                  Sign Up
                </Link>
              </p>
              <div className="text-sm text-end">
                <a
                  href="#"
                  className="font-semibold text-[#4482F6] hover:text-[#4482F6]"
                >
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#4482F6] px-3 py-1.5 mt-4 text-lg font-bold leading-6 text-white shadow-sm "
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;
