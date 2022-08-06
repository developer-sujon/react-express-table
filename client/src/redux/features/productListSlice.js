//external import
import { createSlice } from "@reduxjs/toolkit";

const productListSlice = createSlice({
  name: "product",
  initialState: {
    productList: [],
    total: 0,
  },
  reducers: {
    setProductList(state, action) {
      state.productList = action.payload;
    },
    setTotal(state, action) {
      state.total = action.payload;
    },
  },
});

export const { setProductList, setTotal } = productListSlice.actions;
export default productListSlice.reducer;
