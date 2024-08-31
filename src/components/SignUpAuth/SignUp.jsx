import { useEffect, useRef, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../FirebaseConfig/firebase.js";
function SignUp() {
  const [auth, setAuth] = useState();

  useEffect(() => {
    setAuth(getAuth(app));
  }, []);

  const userEmail = useRef();
  const userPassword = useRef();
  const getSignUpCredentails = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userEmail.current.value,
        userPassword.current.value
      );
      const user = userCredential.user;
      console.log(user.uid);
    } catch (error) {
      console.log(error);
    }
    userEmail.current.value = "";
    userPassword.current.value = "";
  };
  return (
    <>
      <div className="mt-10 sm:mx-auto sm:w-full lg:w-[40rem] md:w-[32rem] box-content">
        <form
          id="form"
          className="space-y-6 p-6 py-8 rounded-md"
          method="POST"
          onSubmit={getSignUpCredentails}
        >
          <h1 className="text-3xl text-[#3c3c3c] text-center font-bold">
            Register
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
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#4482F6] px-3 py-1.5 mt-4 text-lg font-bold leading-6 text-white shadow-sm "
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
