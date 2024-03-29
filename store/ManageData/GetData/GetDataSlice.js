import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  cartItems: [],
  cartItemsData: [],
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
    setCardItems(state, action) {
      // console.log(action.payload);
      state.cartItems = action.payload;
    },
    setCardItemsData(state, action) {
      // console.log(action.payload);
      state.cartItemsData = action.payload;
    },
  },
});

export const getDataSliceActions = getDataSlice.actions;
export default getDataSlice.reducer;
