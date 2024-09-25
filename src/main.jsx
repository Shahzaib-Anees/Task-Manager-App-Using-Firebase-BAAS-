import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Hero from "./screens/Page-Hero/Hero";
import SignIn from "./screens/SignInAuth/SignIn";
import SignUp from "./screens/SignUpAuth/SignUp";
import Profile from "./screens/Profile/Profile";
import TaskLayout from "./screens/Profile/ProfileComponents/TaskManager/Manager/TaskLayout";
import AllTask from "./screens/Profile/ProfileComponents/TaskManager/Manager/AllTask/AllTask";
import CompletedTask from "./screens/Profile/ProfileComponents/TaskManager/Manager/CompletedTask/CompletedTask";
import PendingTask from "./screens/Profile/ProfileComponents/TaskManager/Manager/PendingTask/PendingTask";
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
        path: "/Profile/:id",
        element: <Profile />,
        children: [
          {
            path: "/Profile/:id/TaskManager",
            element: <TaskLayout />,
            children: [
              {
                path: "/Profile/:id/TaskManager/",
                element: <AllTask />,
              },
              {
                path: "/Profile/:id/TaskManager/CompletedTask",
                element: <CompletedTask />,
              },
              {
                path: "/Profile/:id/TaskManager/PendingTask",
                element: <PendingTask />,
              },
            ],
          },
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
