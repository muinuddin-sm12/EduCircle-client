import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Authentication/Login";
import CreateAssignment from "../pages/CreateAssignment";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/login',
            element: <Login/>
        },
        {
          path: '/create-assignments',
          element: <CreateAssignment/>
        }
      ]
    },
  ]);
export default router