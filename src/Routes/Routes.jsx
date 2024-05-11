import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Authentication/Login";
import CreateAssignment from "../pages/CreateAssignment";
import Home from "../pages/Home";
import PrivateRoutes from "./PrivateRoutes";
import Register from "../pages/Authentication/Register";
import Assignments from "../pages/Assignments";
import UpdateAssignment from "../pages/UpdateAssignment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        path : "/register",
        element: <Register/>
      },
      {
        path: '/assignments',
        element: <Assignments/>,
      },
      {
        path: '/update-assignment/:id',
        element: <UpdateAssignment/>,
        loader: ({params}) => fetch(`http://localhost:7000/assignments/${params.id}`)
      }
    ],
  },
]);
export default router;
