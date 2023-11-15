/// <reference types="uuid" />

import "./index.css";
import avatar from "./images/avatar.png";
import { useEffect, useRef, useState } from "react";
import _ from "lodash";
import classNames from "classnames";
import { v4 } from "uuid";
import dayjs from "dayjs";
import axios from "axios";

/* 
// 依赖的数据
const list = [
  {
    rpid: "3",
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
    rpid: "2",
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
    rpid: "1",
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
*/
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

// 自定义一个hook，用来获取服务器list数据
const useGetList = () => {
  // 使用 useEffect 调用接口获取数据
  const [commentList, setCommentList] = useState<any[]>([]);
  useEffect(() => {
    const getList = async () => {
      const res = await axios.get("http://localhost:3004/list");
      setCommentList(res.data);
    };
    getList();
  }, []);
  return { commentList, setCommentList };
};

function App() {
  /* --------- 1. 渲染功能-使用useState钩子维护状态变量，将变量渲染到页面 -------- */
  // const [commentList, setCommentList] = useState(list);
  /* 
  // 初次加载时，可以渲染排完序的list
  const [commentList, setCommentList] = useState(
    _.orderBy(list, "like", "desc")
  );
  */
  // 使用 useEffect 调用接口获取数据
  // const [commentList, setCommentList] = useState<any[]>([]);
  // useEffect(() => {
  //   const getList = async () => {
  //     const res = await axios.get("http://localhost:3004/list");
  //     setCommentList(res.data);
  //   };
  //   getList();
  // }, []);

  // 使用自定义hook，解构出需要使用到的状态和方法
  const { commentList, setCommentList } = useGetList();

  /* ---------- 2.删除功能-拿到当前项id，以id为条件对评论列表做filter过滤 --------- */
  // 删除评论的回调
  const handlerDel = (id: string) => {
    setCommentList(commentList.filter((list) => list.rpid !== id));
  };

  /* ------------------- 3. 切换tab,显现高亮功能 ------------------ */
  // (1). 点击谁就把谁的type记录下来
  const [type, setType] = useState("hot");

  // (2). 通过记录的type(独一无二的标识，可以是id等)和每一项遍历时的type做匹配，来控制高亮类名的显示
  const handlerType = (type: string) => {
    setType(type);

    /* ---- 4. 排序功能：把评论列表状态数据进行不同的排序处理，当成新值传给set函数，重新渲染视图 --- */
    // 使用lodash
    if (type === "hot") {
      // 按点赞数排序
      setCommentList(_.orderBy(commentList, "like", "desc")); // _.orderBy(哪个列表？, 哪个字段？, 怎么排序？)
    } else {
      // 按点时间排序
      setCommentList(_.orderBy(commentList, "ctime", "desc"));
    }
  };

  /* ---------------------- 7. 发表评论功能 --------------------- */
  // （1）获取评论内容：使用受控组件绑定状态变量
  const [value, setValue] = useState("");
  // const inputRef = useRef(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  // （2）点击按钮发布：在原列表的基础上，添加新的list,重新渲染
  const handlePublish = () => {
    setCommentList([
      ...commentList,
      {
        rpid: v4(), // 随机id
        user: {
          uid: "30009257",
          avatar: avatar,
          uname: "黑马前端",
        },
        content: value,
        ctime: dayjs(new Date()).format("DD-MM hh:mm"), //格式化时间
        like: 66,
      },
    ]);

    // (3) 清空内容，重新聚焦

    // + 清空内容：把控制input框的value状态设置为空串
    setValue("");
    // + 重新聚焦：拿到input的dom元素（useRef)，调用focus方法
    inputRef.current?.focus();
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
                className={classNames({ on: tab.type === type })}
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
              // （1）获取评论内容：使用受控组件绑定状态变量
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              ref={inputRef}
            />
            <button className="comment-submit" onClick={handlePublish}>
              发表评论
            </button>
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
