import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./router/index.js";

// 导入路由表
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* 路由绑定 */}
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>
);
