import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>login page</h1>

      {/* 路由跳转方法 1：声明式写法：常用于菜单导航 */}
      <Link to="/article">跳转到文章页面</Link>

      {/* 路由跳转方法 2：编程式写法：常用js逻辑中 */}
      <button onClick={() => navigate("/article")}>跳转到文章页面</button>
    </div>
  );
};
