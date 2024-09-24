import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Hero from "./screens/Page-Hero/Hero";
import SignIn from "./screens/SignInAuth/SignIn";
import SignUp from "./screens/SignUpAuth/SignUp";
import Profile from "./screens/Profile/Profile"
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
        path : "/Profile/:id",
        element : <Profile/>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
