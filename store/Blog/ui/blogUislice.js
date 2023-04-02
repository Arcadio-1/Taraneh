import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
  blogSub: null,
  subsClass: "",
  isShowBlogMenu: false,
  blogPostsStatus: {
    status: null,
    title: null,
    message: null,
  },
  blogAdProductsStatus: {
    status: null,
    title: null,
    message: null,
  },
};

const blogUiSlice = createSlice({
  name: "blogUiSlice",
  initialState,
  reducers: {
    setIsDark(state) {
      state.isDark = !state.isDark;
    },
    setBlogSub(state, action) {
      state.blogSub = action.payload;
    },
    setSubsClass(state, action) {
      state.subsClass = action.payload;
    },
    setIsShowBlogMenu(state, action) {
      state.isShowBlogMenu = action.payload;
    },
    setBlogPostsStatus(state, action) {
      state.blogPostsStatus = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    setBlogAdProductsStatus(state, action) {
      state.blogAdProductsStatus = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const blogUiAction = blogUiSlice.actions;
export default blogUiSlice.reducer;
