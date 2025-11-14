import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { createBrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import User from "./pages/User/User";
import Github, { githubInfoLoader } from "./pages/Github/Github";
import CartItem from "./pages/CartItem/CartItem";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "user/:userId",
        element: <User />,
      },
      {
        path: "cart",
        element: <CartItem />,
      },
      {
        path: "github",
        element: <Github />,
        loader: githubInfoLoader, // it is used for calling function api call while component is mounted
      },
    ],
  },
]);

export default Router;
