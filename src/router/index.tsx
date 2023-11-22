import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Article } from "../pages/Article";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/article",
    element: <Article />,
  },
]);

export default router;
