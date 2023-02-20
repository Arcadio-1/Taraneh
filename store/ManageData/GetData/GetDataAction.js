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

export const getLocalStoageCartItems = () => {
  return async (dispatch) => {
    try {
      dispatch(
        uiAction.setGetCartItemsStatus({
          status: "loading",
          title: "Loading...",
          message: "trying to get cart items",
        })
      );
      const localStorageCartItemsJson = localStorage.getItem("cartItems");
      const cartItemsArray = [];
      if (localStorageCartItemsJson === "[null]") {
        console.log("fuckyes");
        dispatch(getDataSliceActions.getCardItems([]));
        dispatch(
          uiAction.setGetCartItemsStatus({
            status: "success",
            title: "Sucsessfuly",
            message: "get Cart Items sucsessfuly",
          })
        );
        return;
      }
      if (localStorageCartItemsJson) {
        const localStorageItems = JSON.parse(localStorageCartItemsJson);
        console.log(localStorageCartItemsJson);
        Object.keys(localStorageItems).forEach((key, index) => {
          cartItemsArray.push(localStorageItems[key]);
        });
      }

      dispatch(getDataSliceActions.getCardItems(cartItemsArray));

      dispatch(
        uiAction.setGetCartItemsStatus({
          status: "success",
          title: "Sucsessfuly",
          message: "get Cart Items sucsessfuly",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.setGetCartItemsStatus({
          status: "error",
          title: "Error",
          message: error || "we have  problem in geting cart items",
        })
      );
    }
  };
};

export const getCartItemsData = (items) => {
  return async (dispatch) => {
    try {
      dispatch(
        uiAction.setGetCartItemsDataStatus({
          status: "loading",
          title: "Loading...",
          message: "trying to get cart items",
        })
      );
      const mylist = [];
      const cartListArray = await items.map(async (item) => {
        const request = await fetch(
          `/api/helperAPI/getSingleProduct/${item.ProductId}`,
          {
            method: "GET",
          }
        );
        if (!request) {
          throw new Error("request fucked");
        }
        const data = await request.json();
        return await { ...data.product, ...item };
      });
      mylist.push({ ...cartListArray });
      var arrayOfValues = await Promise.all(cartListArray);
      dispatch(getDataSliceActions.getCardItemsData(arrayOfValues));

      dispatch(
        uiAction.setGetCartItemsDataStatus({
          status: "success",
          title: "Sucsessfuly",
          message: "get Cart Items sucsessfuly",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.setGetCartItemsStatus({
          status: "error",
          title: "Error",
          message: error || "we have  problem in geting cart items",
        })
      );
    }
  };
};
