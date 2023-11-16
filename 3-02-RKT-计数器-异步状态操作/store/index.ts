/* ------------------------ 组合子模块 ----------------------- */
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./moudles/counterStore";
import channelReducer from "./moudles/channelStore";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    channel: channelReducer,
  },
});
export default store;
