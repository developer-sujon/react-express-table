//external import
import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "../features/productListSlice";
import settingSlice from "../features/settingSlice";

const store = configureStore({
  reducer: {
    setting: settingSlice,
    product: productListSlice,
  },
});

export default store;
