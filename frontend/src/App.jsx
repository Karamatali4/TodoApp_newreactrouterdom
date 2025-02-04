import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Routes/Root";
import UserDetail, { loader as userDetailLoader } from "./Routes/UserDetail";
import ErrorPage from "./Component/ErrorPage";
import UpdateUser from "./Routes/UpdateUser";
import { action, loader as loaderdata } from "./Component/UserList";
import { loader } from "./store";
import UserCreate from "./Routes/UserCreate";
import DeleteUser, { action as deleteUser } from "./Routes/DeleteUser";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: loaderdata,
    action: action,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "users/:id", // Corrected the path
        element: <UserDetail />,
        loader: userDetailLoader,
      },
      {
        path: "users/:id/edit",
        element: <UpdateUser />,
        loader: userDetailLoader,
      },
      {
        path: "usercreate/:id",
        element: <UserCreate />,
        loader: userDetailLoader,
        // action:useraction,
      },
      {
        path: "users/:id/destroy",
        action: deleteUser,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
