import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Menu from "../Pages/Menu/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home title="Home" />,
      },
      {
        path: "/about",
        element: <About title="About" />,
      },
      {
        path: "/menu",
        element: <Menu title="Menu" />,
      },
    ],
  },
]);
