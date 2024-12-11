import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import BaseLayout from "./layouts/BaseLayout";
import NotFoundPage from "./pages/404";
import BaseErrorPage from "./pages/error";
import Login from "./pages/login";
import Logout from "./pages/logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <BaseErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
