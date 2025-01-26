import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Routes/Root";
import UserDetail, { loader as userDetailLoader } from "./Routes/UserDetail";
import ErrorPage from "./Component/ErrorPage";
import UpdateUser from "./Routes/UpdateUser";
import { loader } from "./store";
import UserCreate from "./Routes/UserCreate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "users/:id", // Corrected the path
        element: <UserDetail />,
        loader: userDetailLoader,
      },
      {
        path: "users/:id/edit", // Corrected the path
        element: <UpdateUser />,
        loader: userDetailLoader,
      },
      {
        path: "usercreate/:id", // Corrected the path
        element: <UserCreate />,
        loader: userDetailLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
