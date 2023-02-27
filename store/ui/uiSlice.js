import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  windowWidth: 0,
  isDark: false,
  isShowBackDrop: false,
  isShowMenu: false,
  // isShowCart: false,
  isShowFilterMenu: false,
  isShowSortMenu: false,
  isShowPerPageMenu: false,
  isShowNotif: false,
  getAllproductsStatus: null,
  getCartItemsStatus: null,
  getCartItemsDataStatus: {
    status: "loading",
    title: "Loading...",
    message: "در حال دریافت لیست محصولات",
  },
  getUiStatus: null,
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
    setWindowWidth(state, action) {
      state.windowWidth = action.payload;
    },
    setShowSideMenu(state) {
      state.isShowMenu = true;
      state.isShowBackDrop = true;
    },
    // setShowCart(state) {
    //   state.isShowCart = true;
    // },
    setShowFilterMenu(state) {
      state.isShowFilterMenu = true;
      state.isShowBackDrop = true;
    },
    setGetAllProductsStatus(state, action) {
      state.getAllproductsStatus = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    setGetCartItemsStatus(state, action) {
      state.getCartItemsStatus = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    setGetCartItemsDataStatus(state, action) {
      state.getCartItemsDataStatus = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    setGetUiStatus(state, action) {
      state.getUiStatus = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    showNotif(state) {
      state.isShowNotif = true;
    },
    closeModal(state) {
      state.isShowBackDrop = false;
      state.isShowNotif = false;
      state.isShowMenu = false;
      // state.isShowCart = false;
      state.isShowFilterMenu = false;
      state.isShowSortMenu = false;
      state.isShowPerPageMenu = false;
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
