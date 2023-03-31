import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  blogNavLinks: [],
  blogPosts: [],
  blogFooterNavLinks: [],
};

const blogGetDataSlice = createSlice({
  name: "BlogGetDataSlice",
  initialState,
  reducers: {
    blogGetNavLinks(state, action) {
      state.blogNavLinks = action.payload;
    },
    blogGetPosts(state, action) {
      state.blogPosts = action.payload;
    },
    blogGetFooterNavLinks(state, action) {
      state.blogFooterNavLinks = action.payload;
    },
  },
});

export const blogGetDataSliceActions = blogGetDataSlice.actions;
export default blogGetDataSlice.reducer;
