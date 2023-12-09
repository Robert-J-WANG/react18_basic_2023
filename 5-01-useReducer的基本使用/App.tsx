import React, { useReducer } from "react";

const App = () => {
  /* ------------------ useReducer的基本使用： ------------------ */
  // 1. 定义reducer函数，根据不同的action返回不同的新状态
  // 2. 使用useReducer分派action
  // 3. 调用dispatch函数传入action对象 触发reducer函数，分派action操作，使用新状态更新视图
  // 4.分派action传参:
  // 做法：分派action时如果想要传递参数，需要在action对象中添加一个payload参数，放置状态参数

  // 1. 定义reducer函数，根据不同的action返回不同的新状态
  const reducer = (state, action) => {
    switch (action.type) {
      case "INC":
        return state + 1;
      case "DEC":
        return state - 1;
      case "UPDATE":
        return state + action.payload;
      default:
        return state;
    }
  };
  // 2. 使用useReducer分派action
  const [state, dispatch] = useReducer(reducer, 100);

  return (
    <div>
      {/* 3. 调用dispatch函数传入action对象 触发reducer函数，分派action操作，使用新状态更新视图 */}
      <h1>count is {state}</h1>
      <button onClick={() => dispatch({ type: "DEC" })}> REMOVE </button>
      <button onClick={() => dispatch({ type: "INC" })}> ADD </button>
      {/* 4.分派action时如果想要传递参数，需要在action对象中添加一个payload参数，放置状态参数 */}
      <button onClick={() => dispatch({ type: "UPDATE", payload: 100 })}>
        UPDATE
      </button>
    </div>
  );
};

export default App;
