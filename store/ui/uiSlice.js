import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
  isShowMenu: false,
  isShowNotif: false,
  getAllproductsStatus: null,
  userActionNotif: {
    status: "null",
    title: "null",
    message: "null",
  },
  sideNotif: {
    status: "null",
    title: "null",
    message: "null",
  },
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
    showNotif(state) {
      state.isShowNotif = true;
    },
    closeModal(state) {
      state.isShowNotif = false;
    },
    setNotif(state, action) {
      state.userActionNotif = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    setSideNotif(state, action) {
      state.sideNotif = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const uiAction = uiSlice.actions;
export default uiSlice.reducer;
