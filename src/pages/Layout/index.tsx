import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <h1>我是一级路由页面Layout</h1>
      <div>
        <Link to="/about">about</Link>
      </div>
      <div>
        <Link to="/board">board</Link>
      </div>

      {/* 二级路由渲染位置 */}
      <Outlet />
    </div>
  );
};
