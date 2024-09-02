// import SignIn from "../SignInAuth/SignIn.jsx";
import { Link } from "react-router-dom";
import "./hero.css";
import UserProfile from "../UserProfileManager/UserProfile";
function Hero() {
  {
    if (localStorage.getItem("currentUser") === null) {
      return (
        <article
          id="main-hero-container"
          className="main-container lg:p-20 sm:p-4 flex flex-col gap-2 items-center justify-center w-[100%] h-[80vh]"
        >
          <h1 className="head-main text-center lg:text-[3rem] sm:text-[2rem] font-bold w-[fit-content] h-[fit-content]">
            Welcome to The Task Management App
          </h1>
          <p className="paragraph lg:text-[1.2rem] text-center font-medium text-[#979797]">
            Manage your tasks efficiently and effectively with our app.
          </p>
          <Link
            to="/SignUpAuth"
            className="bg-[#4482F6] text-[#fff] lg:text-[1.1rem] font-bold px-4 py-2 outline-none rounded"
          >
            Get Started
          </Link>
        </article>
      );
    } else {
      return (
        <>
          <UserProfile />
        </>
      );
    }
  }
}
export default Hero;
