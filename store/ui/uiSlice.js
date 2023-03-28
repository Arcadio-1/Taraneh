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
  cartListStatus: {
    status: null,
    title: null,
    message: null,
  },
  getClientStatus: {
    status: "loading",
    title: "Loading...",
    message: "در حال دریافت لیست سفارشات",
  },
  cartListDataStatus: {
    status: null,
    title: null,
    message: null,
  },
  changeAmountStatus: {
    status: null,
    title: null,
    message: null,
  },
  syncCartListStatus: {
    status: null,
    title: null,
    message: null,
  },
  clearListStatus: {
    status: null,
    title: null,
    message: null,
  },

  addOrderStatus: {
    status: null,
    title: null,
    message: null,
  },
  removeOrderStatus: {
    status: "loading",
    title: "Loading...",
    message: "در حال افزودن به لیست سفارشات",
  },
  cartListSyncingStatus: {
    status: "loading",
    title: "Loading...",
    message: "در حال افزودن سفارشات",
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
    },
    showBackDrop(state) {
      state.isShowBackDrop = true;
    },
    hideBackDrop(state) {
      state.isShowBackDrop = false;
    },
    // setShowCart(state) {
    //   state.isShowCart = true;
    // },
    setShowFilterMenu(state) {
      state.isShowFilterMenu = true;
    },
    setGetAllProductsStatus(state, action) {
      state.getAllproductsStatus = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    setCartListStatus(state, action) {
      state.cartListStatus = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    setCartListDataStatus(state, action) {
      state.cartListDataStatus = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    setSyncCartListStatus(state, action) {
      state.syncCartListStatus = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    setChangeAmountStatus(state, action) {
      state.changeAmountStatus = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    setAddOrderStatus(state, action) {
      state.addOrderStatus = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    setClearListStatus(state, action) {
      state.clearListStatus = {
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
      state.isShowNotif = false;
      state.isShowMenu = false;
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
