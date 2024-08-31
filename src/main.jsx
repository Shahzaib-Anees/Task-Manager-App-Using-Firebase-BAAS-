import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Page-Hero/Hero";
import SignIn from "./components/SignInAuth/SignIn.jsx";
import SignUp from "./components/SignUpAuth/SignUp.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <Hero />
    <SignIn />
    <SignUp />
    {/* <App /> */}
  </>
);
