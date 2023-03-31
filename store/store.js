import { configureStore } from "@reduxjs/toolkit";
import blogGetDataSlice from "./Blog/getData/BlogGetDataSlice";
import blogUislice from "./Blog/ui/blogUislice";
import GetDataSlice from "./ManageData/GetData/GetDataSlice";
import SendDataSlice from "./ManageData/SendData/SendDataSlice";
import uiSlice from "./ui/uiSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice,
    getData: GetDataSlice,
    sendData: SendDataSlice,
    blogUi: blogUislice,
    blogGetData: blogGetDataSlice,
  },
});
export default store;
