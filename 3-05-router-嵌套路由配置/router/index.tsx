import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Article } from "../pages/Article";
import React from "react";
import { Layout } from "../pages/Layout";
import { About } from "../pages/Layout/About";
import { Board } from "../pages/Layout/Board";

const router = createBrowserRouter([
  // 嵌套路由的配置,使用children属性
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/board",
        element: <Board />,
      },
    ],
  },
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
