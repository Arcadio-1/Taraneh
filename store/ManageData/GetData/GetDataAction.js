import { uiAction } from "../../ui/uiSlice";
import { getDataSliceActions } from "./GetDataSlice";

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(
        uiAction.setGetAllProductsStatus({
          status: "loading",
          title: "Loading...",
          message: "در حال دریافت لیست محصولات",
        })
      );
      const request = await fetch("/api/productsManager", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!request || request.status === "error") {
        throw new Error("خطا در دریافت لیست محصولات");
      }
      const data = await request.json();
      if (!data) {
        throw new Error("خطا در دریافت اطلاعات لیست محصولات");
      }
      console.log(data.data);
      dispatch(getDataSliceActions.getProducts(data.data));
      dispatch(
        uiAction.setGetAllProductsStatus({
          status: "success",
          title: "Successfuly...",
          message: "لیست محصولات با موفقیت دریافت شد",
        })
      );
    } catch (error) {
      uiAction.setGetAllProductsStatus({
        status: "error",
        title: "Error...",
        message: error.message,
      });
    }
  };
};
