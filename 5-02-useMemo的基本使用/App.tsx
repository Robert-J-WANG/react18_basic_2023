import React, { useMemo, useReducer, useState } from "react";
/* ------------------ useMemo的基本使用： ------------------ */
//1. useMemo传入2个参数，回调函数（用于重新计算结果）和依赖项（计算新的结果是的依赖），返回的是重新计算的值
// 2. 用于缓存状态变量的结果，使用场景是在消耗非常大的计算中使用，可以优化性能

// 定义一个斐波那契函数，模拟消耗巨大的计算
function fib(n) {
  console.log("计算函数执行了");
  if (n < 3) return 1;
  return fib(n - 2) + fib(n - 1);
}

const App = () => {
  // 定义状态变量，并使用计算函数
  const [count1, setCount1] = useState(0);
  // 计算斐波那契之和
  // 未使用useMemo：count2的变化，也会调用fib函数
  // const result = fib(count1);
  // 使用useMemo，缓存数据,只有count1变化时，才会调用fib函数，count2的变化，不会调用fib函数
  const result = useMemo(() => {
    return fib(count1);
  }, [count1]);
  console.log("组件重新渲染了");
  // 定义另外一个状态变量，更新状态时，让组件重新渲染
  const [count2, setCount2] = useState(0);
  return (
    <div>
      <p>计算结果是{result}</p>
      <button onClick={() => setCount1(count1 + 1)}>
        change count1 {count1}
      </button>
      <button onClick={() => setCount2(count2 + 1)}>
        change count2 {count2}
      </button>
    </div>
  );
};

export default App;
