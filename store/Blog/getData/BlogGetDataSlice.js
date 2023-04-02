import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  blogPosts: [],
  blogAdProducts: [],
};

const blogGetDataSlice = createSlice({
  name: "BlogGetDataSlice",
  initialState,
  reducers: {
    setBlogPosts(state, action) {
      state.blogPosts = action.payload;
    },
    setBlogAdProducts(state, action) {
      state.blogAdProducts = action.payload;
    },
  },
});

export const blogGetDataSliceActions = blogGetDataSlice.actions;
export default blogGetDataSlice.reducer;
