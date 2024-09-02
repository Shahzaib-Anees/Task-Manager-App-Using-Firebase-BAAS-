import { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../FirebaseConfig/firebase.js";
import { Link } from "react-router-dom";
function SignUp() {
  const userName = useRef();
  const userEmail = useRef();
  const userPassword = useRef();

  async function setDocumentInDb(
    uid,
    name,
    email,
    password,
    imageUrl = "https://firebasestorage.googleapis.com/v0/b/todo-backend-bcd23.appspot.com/o/userImages%2Fmale_avatar-removebg-preview.png?alt=media&token=b1f489e2-35c5-43c7-921f-146f7759ad71"
  ) {
    await setDoc(doc(db, "siteUsers", `${uid}`), {
      name,
      email,
      password,
      imageUrl,
    });
    console.log("New User In Database ===>", uid);
  }

  const getSignUpCredentails = async (event) => {
    event.preventDefault();
    try {
      document.getElementById("loader").style.display = "flex";
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userEmail.current.value,
        userPassword.current.value
      );
      const user = userCredential.user;
      await setDocumentInDb(
        user.uid,
        userName.current.value,
        userEmail.current.value,
        userPassword.current.value
      );
      localStorage.setItem("currentUser", `${user.uid}`);
    } catch (error) {
      console.log(error);
    } finally {
      document.getElementById("loader").style.display = "none";
    }
    userEmail.current.value = "";
    userPassword.current.value = "";
  };
  return (
    <>
      <div className="mt-20 sm:mx-auto sm:w-full lg:w-[40rem] md:w-[32rem] box-content">
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
            <p className="text-[12px] font-bold p-1 mt-1">
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
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
