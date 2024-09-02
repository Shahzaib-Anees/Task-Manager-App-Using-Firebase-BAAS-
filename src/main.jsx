import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Hero from "./components/Page-Hero/Hero";
import SignIn from "./components/SignInAuth/SignIn";
import SignUp from "./components/SignUpAuth/SignUp";
import UserProfile from "./components/UserProfileManager/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path : "/SignInAuth",
        element : <SignIn/>
      },
      {
        path : "/SignUpAuth",
        element : <SignUp/>
      },
      {
        path : "/UserProfileManager",
        element : <UserProfile/>
      }

    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
