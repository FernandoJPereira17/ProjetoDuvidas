import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home"


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/about",
      element: <div>About</div>,
    },
  ]);
