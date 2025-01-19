import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Routes/Root';
import UserDetail from './Routes/UserDetail';
import ErrorPage from './Component/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'users/:id', // Corrected the path
        element: <UserDetail />,
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
