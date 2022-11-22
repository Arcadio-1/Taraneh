import { configureStore } from "@reduxjs/toolkit";
import GetDataSlice from "./ManageData/GetData/GetDataSlice";
import uiSlice from "./ui/uiSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice,
    getData: GetDataSlice,
  },
});
export default store;
