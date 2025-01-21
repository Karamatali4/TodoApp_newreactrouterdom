import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Routes/Root';
import UserDetail, { loader as userDetailLoader } from './Routes/UserDetail';
import ErrorPage from './Component/ErrorPage';
import UpdateUser from './Routes/UpdateUser';
import { loader  } from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'users/:id', // Corrected the path
        element: <UserDetail />,
        loader: userDetailLoader,
      },
      {
        path: 'usersUpdate/:id', // Corrected the path
        element: <UpdateUser />,
        loader: loader,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
