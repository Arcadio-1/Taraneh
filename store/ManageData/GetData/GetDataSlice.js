import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  categoryNavLinks: [],
};

const getDataSlice = createSlice({
  name: "getDataSlice",
  initialState,
  reducers: {
    getProducts(state, action) {
      state.products = action.payload;
    },
    // getcategoryNavLinks(state, action) {
    //   state.categoryNavLinks = action.payload;
    // },
  },
});

export const getDataSliceActions = getDataSlice.actions;
export default getDataSlice.reducer;
