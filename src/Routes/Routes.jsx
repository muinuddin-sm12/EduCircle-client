import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Authentication/Login";
import CreateAssignment from "../pages/CreateAssignment";
import Home from "../pages/Home";
import PrivateRoutes from "./PrivateRoutes";
import Register from "../pages/Authentication/Register";
import Assignments from "../pages/Assignments";
import UpdateAssignment from "../pages/UpdateAssignment";
import ErrorPage from "../pages/ErrorPage";
import Details from "../pages/Details";
import TakeAssignment from "../pages/TakeAssignment";
import MyAttempt from "../pages/MyAttempt";
import Pending from "../pages/Pending";
import GiveMark from "../pages/GiveMark";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/create-assignments",
        element: (
          <PrivateRoutes>
            <CreateAssignment />
          </PrivateRoutes>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/assignments",
        element: <Assignments />,
      },
      {
        path: "/update-assignment/:id",
        element: (
          <PrivateRoutes>
            <UpdateAssignment />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://edu-circle-server.vercel.app/assignments/${params.id}`
          ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <Details />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://edu-circle-server.vercel.app/assignments/${params.id}`
          ),
      },
      {
        path: "/take-assignment",
        element: (
          <PrivateRoutes>
            <TakeAssignment />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-attempt",
        element: (
          <PrivateRoutes>
            <MyAttempt />
          </PrivateRoutes>
        ),
      },
      {
        path: "/pending",
        element: (
          <PrivateRoutes>
            <Pending />
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("https://edu-circle-server.vercel.app/take").then((res) =>
            res.json()
          ),
      },
      {
        path: "/give-mark/:id",
        element: (
          <PrivateRoutes>
            <GiveMark></GiveMark>
          </PrivateRoutes>
        ),
        loader: ( {params}) =>
        fetch(`https://edu-circle-server.vercel.app/take/${params.id}`).then((res) =>
            res.json()
          ),
      },
    ],
  },
]);
export default router;
