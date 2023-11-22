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
  {
    // 使用params传参时，设置占位
    path: "/article/:id/:name",
    element: <Article />,
  },
]);

export default router;
