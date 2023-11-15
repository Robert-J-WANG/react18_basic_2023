import { useDispatch, useSelector } from "react-redux";
import { addToNum, decrement, increment } from "./store/moudles/counterStore";

export const App = () => {
  //1. 使用 useSelector钩子获取store中的状态数据
  const { count } = useSelector((state: any) => state.counter);
  // 2. 使用 useDispatch()钩子创建dispatch方法
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      {/* 3. dispatch方法更新状态 */}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(addToNum(10))}>add 10</button>
      <button onClick={() => dispatch(addToNum(20))}>add 20</button>
    </div>
  );
};
