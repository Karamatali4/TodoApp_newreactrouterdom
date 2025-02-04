import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Routes/Root";
import UserDetail, { loader as userDetailLoader } from "./Routes/UserDetail";
import ErrorPage from "./Component/ErrorPage";
import UpdateUser,{action as updateAction} from "./Routes/UpdateUser";
import { action, loader as loaderdata } from "./Component/UserList";
import { loader } from "./store";
import UserCreate,{action as createAction} from "./Routes/UserCreate";
import DeleteUser, { action as deleteUser } from "./Routes/DeleteUser";
import SingleUser from "./Routes/SingleUser";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: loaderdata,
    action: action,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/users", 
        element: <UserDetail />,
        loader:loaderdata,
        
      },
      {
        path: "singleuser/:id", 
        element: <SingleUser />,
        loader: userDetailLoader,
      },
      {
        path: "users/:id",
        element: <UpdateUser />,
        loader: userDetailLoader,
        action:updateAction,
      },
      {
        path: "usercreate/:id",
        element: <UserCreate />,
        loader: userDetailLoader,
        action:createAction,
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
