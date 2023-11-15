/* ------------------------ 组合子模块 ----------------------- */
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./moudles/counterStore";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;
