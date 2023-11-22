import { useDispatch, useSelector } from "react-redux";
import { addToNum, decrement, increment } from "./store/moudles/counterStore";
import { fetchChannelList } from "./store/moudles/channelStore";
import { useEffect } from "react";
import { ThunkDispatch } from "redux-thunk";

export const App = () => {
  //1. 使用 useSelector钩子获取store中的状态数据
  const { count } = useSelector((state: any) => state.counter);
  // 2. 使用 useDispatch()钩子创建dispatch方法
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  // 4. 异步操作获取数据
  const channelList = useSelector((state: any) => state.channel);
  console.log(channelList);
  useEffect(() => {
    dispatch(fetchChannelList());
  }, [dispatch]);
  return (
    <div>
      <h1>{count}</h1>
      {/* 3. dispatch方法更新状态 */}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(addToNum(10))}>add 10</button>
      <button onClick={() => dispatch(addToNum(20))}>add 20</button>
      {/* 5.使用异步方法获取的数据 */}
      <div>
        <ul>
          {channelList?.map((item: any) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
