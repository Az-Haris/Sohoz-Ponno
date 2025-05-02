import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Error from "../pages/Error";
import InvoicePage from "../pages/Invoice";

const Router = createBrowserRouter([
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/invoice",
    element: <InvoicePage />,
  },
]);

export default Router;
