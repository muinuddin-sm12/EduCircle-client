import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Authentication/Login";
import CreateAssignment from "../pages/CreateAssignment";
import Home from "../pages/Home";
import PrivateRoutes from "./PrivateRoutes";

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
    ],
  },
]);
export default router;
