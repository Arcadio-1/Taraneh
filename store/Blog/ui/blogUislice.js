import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
  blogSub: null,
  subsClass: "",
  isShowBlogMenu: false,
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
  },
});
export const blogUiAction = blogUiSlice.actions;
export default blogUiSlice.reducer;
