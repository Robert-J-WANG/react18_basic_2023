import "./index.css";
import avatar from "./images/avatar.png";

// 完成 评论数据渲染  tab内容渲染  评论列表点赞和点踩  三个视图渲染
// 依赖的数据
const state = {
  // hot: 热度排序  time: 时间排序
  tabs: [
    {
      id: 1,
      name: "热度",
      type: "hot",
    },
    {
      id: 2,
      name: "时间",
      type: "time",
    },
  ],
  active: "hot",
  list: [
    {
      id: 1,
      author: "刘德华",
      comment: "给我一杯忘情水",
      time: new Date("2021-10-10 09:09:00"),
      // 1: 点赞 0：无态度 -1:踩
      attitude: 1,
    },
    {
      id: 2,
      author: "周杰伦",
      comment: "哎哟，不错哦",
      time: new Date("2021-10-11 09:09:00"),
      // 1: 点赞 0：无态度 -1:踩
      attitude: 0,
    },
    {
      id: 3,
      author: "五月天",
      comment: "不打扰，是我的温柔",
      time: new Date("2021-10-11 10:09:00"),
      // 1: 点赞 0：无态度 -1:踩
      attitude: -1,
    },
  ],
};
function App() {
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
            {state.tabs.map((tab) => (
              <li
                key={tab.id}
                className={`${tab.type === state.active && "on"}`}
                //  或者这样
                //  className={tab.type === state.active ? "on" : ""}
              >
                按{tab.name}排序
              </li>
            ))}
          </ul>
        </div>

        {/* 添加评论 */}
        <div className="comment-send">
          <div className="user-face">
            <img className="user-head" src={avatar} alt="" />
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
          {/* 渲染评论列表 */}
          {state.list.map((item) => (
            <div key={item.id} className="list-item">
              <div className="user-face">
                <img className="user-head" src={avatar} alt="" />
              </div>
              <div className="comment">
                <div className="user">{item.author}</div>
                <p className="text">{item.comment}</p>
                <div className="info">
                  <span className="time">{item.time.toString()}</span>
                  <span className={`like ${item.attitude === 1 && "liked"}`}>
                    <i className="icon" />
                  </span>
                  <span className={`hate ${item.attitude === -1 && "hated"}`}>
                    <i className="icon" />
                  </span>
                  <span className="reply btn-hover">删除</span>
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
