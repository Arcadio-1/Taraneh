import { configureStore } from "@reduxjs/toolkit";
import GetDataSlice from "./ManageData/GetData/GetDataSlice";
import SendDataSlice from "./ManageData/SendData/SendDataSlice";
import uiSlice from "./ui/uiSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice,
    getData: GetDataSlice,
    sendData: SendDataSlice,
  },
});
export default store;
