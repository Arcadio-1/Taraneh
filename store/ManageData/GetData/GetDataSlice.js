import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
};

const getDataSlice = createSlice({
  name: "getDataSlice",
  initialState,
  reducers: {
    getProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const getDataSliceActions = getDataSlice.actions;
export default getDataSlice.reducer;
