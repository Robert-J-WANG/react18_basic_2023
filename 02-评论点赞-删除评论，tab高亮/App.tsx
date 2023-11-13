import "./index.css";
import avatar from "./images/avatar.png";
import { useState } from "react";

/* ------------------------- 需求 ------------------------- */
/* 
1. 渲染数据：状态变量控制数据的渲染，使用map函数
2. 只有当前用户才显示删除按钮 ：条件判断，使用逻辑与&&中断
3. 删除评论：匹配当前评论id与列表中评论的id,使用filter函数过滤
4. 点击tab标签高亮显示：获取当前标签的type（或ID），与列表中的type（或ID）相同的，
    添加高亮类名，  条件判断，使用逻辑与&&中断
 */

// 依赖的数据
const list = [
  {
    rpid: 3,
    user: {
      uid: "13258165",
      avatar: "http://toutiao.itheima.net/resources/images/98.jpg",
      uname: "周杰伦",
    },
    content: "哎哟，不错哦",
    ctime: "10-18 08: 15",
    like: 126,
  },
  {
    rpid: 2,
    user: {
      uid: "36080105",
      avatar: "http://toutiao.itheima.net/resources/images/98.jpg",
      uname: "许嵩",
    },
    content: "我寻你千百度 日出到迟暮",
    ctime: "11-13 11: 29",
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: "30009257",
      avatar: avatar,
      uname: "黑马前端",
    },
    content: "学前端就来黑马",
    ctime: "10-19 09: 00",
    like: 66,
  },
];
// 当前登录用户信息
const user = {
  uid: "30009257",
  avatar,
  uname: "黑马前端",
};
// 导航 Tab 数组
const tabs = [
  { type: "hot", text: "最热" },
  { type: "time", text: "最新" },
];

function App() {
  /* --------- 1. 渲染功能-使用useState钩子维护状态变量，将变量渲染到页面 -------- */
  const [commentList, setCommentList] = useState(list);

  /* ---------- 2.删除功能-拿到当前项id，以id为条件对评论列表做filter过滤 --------- */
  // 删除评论的回调
  const handlerDel = (id: number) => {
    setCommentList(commentList.filter((list) => list.rpid !== id));
  };

  /* ------------------- 3. 切换tab,显现高亮功能 ------------------ */
  // 1. 点击谁就把谁的type记录下来
  const [type, setType] = useState("hot");
  // 2. 通过记录的type(独一无二的标识，可以是id等)和每一项遍历时的type做匹配，来控制高亮类名的显示
  const handlerType = (type: string) => {
    setType(type);
  };

  return (
    <div className="App">
      <div className="comment-container">
        {/* 评论数 */}
        <div className="comment-head">
          <span>5 评论</span>
        </div>
        {/* 排序 */}
        <div className="tabs-order">
          <ul className="sort-container">
            {/* 渲染排序标签 */}
            {tabs.map((tab) => (
              <li
                key={tab.type}
                // 2. 通过记录的type和每一项遍历时的type做匹配，来控制高亮类名的显示
                className={`${tab.type === type && "on"}`}
                onClick={() => handlerType(tab.type)}
              >
                按{tab.text}排序
              </li>
            ))}
          </ul>
        </div>

        {/* 添加评论 */}
        <div className="comment-send">
          <div className="user-face">
            <img className="user-head" src={user.avatar} alt="" />
          </div>
          <div className="textarea-container">
            <textarea
              cols={80}
              rows={5}
              placeholder="发条友善的评论"
              className="ipt-txt"
            />
            <button className="comment-submit">发表评论</button>
          </div>
          <div className="comment-emoji">
            <i className="face"></i>
            <span className="text">表情</span>
          </div>
        </div>

        {/* 评论列表 */}
        <div className="comment-list">
          {/*  ----------- 1.渲染功能-用状态变量commentList进行map遍历 ----------- */}
          {/* 渲染评论列表 */}
          {commentList.map((item) => (
            <div key={item.rpid} className="list-item">
              <div className="user-face">
                <img className="user-head" src={item.user.avatar} alt="" />
              </div>
              <div className="comment">
                <div className="user">{item.user.uname}</div>
                <p className="text">{item.content}</p>
                <div className="info">
                  <span className="time">{item.ctime.toString()}</span>
                  <span className="time">点赞数{item.like}</span>
                  {/* 只有是自己的评论才显示删除按钮-条件并判断 */}
                  {/* {判断条件：item.user.uid===user.uid} */}
                  {item.user.uid === user.uid && (
                    <span
                      className="reply btn-hover"
                      onClick={() => handlerDel(item.rpid)}
                    >
                      删除
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
