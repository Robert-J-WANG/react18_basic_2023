import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export const Article = () => {
  // 接受路由跳转的方式
  // 方式1：接收searchParmas参数
  const [params1] = useSearchParams();
  const id1 = params1.get("id");
  const name1 = params1.get("name");

  // 方式2：接收parmas参数
  const params2 = useParams();
  const id2 = params2.id;
  const name2 = params2.name;
  return (
    <div>
      <h1>Article page</h1>
      <div>
        接收searchParmas参数-id是：{id1}-name是：{name1}
      </div>

      <div>
        接收parmas参数-id是：{id2}-name是：{name2}
      </div>
    </div>
  );
};
