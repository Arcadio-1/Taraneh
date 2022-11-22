import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
  isShowMenu: false,
  getAllproductsStatus: null,
};

const uiSlice = createSlice({
  name: "uislice",
  initialState,
  reducers: {
    toggoleIsShowMenu(state) {
      state.isShowMenu = !state.isShowMenu;
    },
    setGetAllProductsStatus(state, action) {
      state.getAllproductsStatus = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const uiAction = uiSlice.actions;
export default uiSlice.reducer;
