import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Article } from "../pages/Article";
import React from "react";
import { Layout } from "../pages/Layout";
import { About } from "../pages/Layout/About";
import { Board } from "../pages/Layout/Board";
import { NotFound } from "../pages/NotFound";

const router = createBrowserRouter([
  // 嵌套路由的配置,使用children属性
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // path: "/about",
        // 设置默认的二级路由
        index: true,
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
  // 配置自定义404页面路由
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
