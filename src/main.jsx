import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Hero from "./components/Page-Hero/Hero";
import SignIn from "./components/SignInAuth/SignIn";
import SignUp from "./components/SignUpAuth/SignUp";
import UserProfile from "./components/CurrentUserProfile/UserProfile/UserProfile";
import ProfileAdminTaskManager from "./components/CurrentUserProfile/ProfileAdminTaskManager/ProfileAdminTaskManager";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "/SignInAuth",
        element: <SignIn />,
      },
      {
        path: "/SignUpAuth",
        element: <SignUp />,
      },
      {
        path: "/CurrentUserProfile",
        element: <h1>Current User Profile</h1>,
        children: [
          {
            path: "/CurrentUserProfile/UserProfile",
            element: <UserProfile />,
          },
          {
            path : "/CurrentUserProfile/ProfileAdminTaskManager",
            element : <ProfileAdminTaskManager/>
          }
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
