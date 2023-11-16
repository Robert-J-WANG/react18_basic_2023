/* --------------------- 创建子store模块 --------------------- */

import { createSlice } from "@reduxjs/toolkit";

// 使用createSlice方法创建countStore对象
const counterStore = createSlice({
  name: "counter",
  // 初始状态
  initialState: {
    count: 0,
  },
  // 修改状态的方法。同步方法。支持直接修改
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    // 实现带有参数的action
    addToNum(state, action) {
      state.count += action.payload;
    },
  },
});
// 解构出actions
const { increment, decrement, addToNum } = counterStore.actions;
// 解构出reducer
const counterReducer = counterStore.reducer;

// 按需暴露actions
export { increment, decrement, addToNum };
// 默认导出reducer
export default counterReducer;
