// import { dataGeter } from "../../../pages/api/helper";
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

      // console.log(request);
      // console.log("request");
      // if (request.status === "error") {
      //   throw new Error("خطا در دریافت لیست محصولات");
      // }

      const data = await request.json();
      // console.log(data);
      if (data.status === "error") {
        throw new Error("خطا در دریافت اطلاعات لیست محصولات");
      }

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
// export const getCategoryNavLinks = () => {
//   console.log("test");
//   return async (dispatch) => {
//     try {
//       dispatch(
//         uiAction.setGetUiStatus({
//           status: "loading",
//           title: "Loading...",
//           message: "در حال دریافت لیست محصولات",
//         })
//       );
//       // const data = await dataGeter("categoryNavLinks");
//       // console.log(data);
//       if (data.status === "error" || !data) {
//         throw new Error("خطا در دریافت اطلاعات لیست محصولات");
//       }
//       console.log(data);
//       dispatch(getDataSliceActions.getcategoryNavLinks(data));

//       dispatch(
//         uiAction.setGetUiStatus({
//           status: "success",
//           title: "Successfuly...",
//           message: "لیست محصولات با موفقیت دریافت شد",
//         })
//       );
//     } catch (error) {
//       uiAction.setGetUiStatus({
//         status: "error",
//         title: "Error...",
//         message: error.message,
//       });
//     }
//   };
// };
