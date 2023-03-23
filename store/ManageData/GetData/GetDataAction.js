// import { dataGeter } from "../../../pages/api/helper";
import { getLocalStorageCartItems } from "../../../lib/utilFunctions";
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

export const getOrederList = (id) => {
  return async (dispatch) => {
    // console.log("getOrederList");
    try {
      dispatch(
        uiAction.setGetServerCartListStatus({
          status: "loading",
          title: "Loading...",
          message: "trying to get cart items",
        })
      );

      const orders = await fetch(`/api/helperAPI/getOrderList/${id}`, {
        method: "GET",
      });
      const response = await orders.json();
      if (response.orders) {
        dispatch(getDataSliceActions.setCardItems(response.orders.orders));
      }
      if (!response.orders) {
        dispatch(getDataSliceActions.setCardItems([]));
      }
      dispatch(
        uiAction.setGetServerCartListStatus({
          status: "success",
          title: "Sucsessfuly",
          message: "get Cart Items sucsessfuly",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.setGetServerCartListStatus({
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
        uiAction.setGetCartListDataStatus({
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
      dispatch(getDataSliceActions.setCardItemsData(arrayOfValues));

      dispatch(
        uiAction.setGetCartListDataStatus({
          status: "success",
          title: "Sucsessfuly",
          message: "get Cart Items sucsessfuly",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.setGetCartListDataStatus({
          status: "error",
          title: "Error",
          message: error || "we have  problem in geting cart items",
        })
      );
    }
  };
};

// export const getLocalStoageCartItems = () => {
//   return async (dispatch) => {
//     try {
//       dispatch(
//         uiAction.setGetServerCartListStatus({
//           status: "loading",
//           title: "Loading...",
//           message: "trying to get cart items",
//         })
//       );
//       const cartItemsArray = getLocalStorageCartItems();
//       dispatch(getDataSliceActions.setCardItems(cartItemsArray));

//       dispatch(
//         uiAction.setGetServerCartListStatus({
//           status: "success",
//           title: "Sucsessfuly",
//           message: "get Cart Items sucsessfuly",
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiAction.setGetServerCartListStatus({
//           status: "error",
//           title: "Error",
//           message: error || "we have  problem in geting cart items",
//         })
//       );
//     }
//   };
// };

// export const removeCartItemFromLocalStorage = (cartItems, id) => {
//   console.log(cartItems);
//   const localStorageCartList = getLocalStorageCartItems;
//   const localStorageCartListt = getLocalStoageCartItems;
//   return async (dispatch) => {
//     try {
//       dispatch(
//         uiAction.setGetServerCartListStatus({
//           status: "loading",
//           title: "Loading...",
//           message: "trying to get cart items",
//         })
//       );
//       const newItems = cartItems.filter((item) => {
//         if (item._id !== id) {
//           return item;
//         }
//       });

//       const jsonFile = JSON.stringify(newItems);
//       localStorage.setItem("cartItems", jsonFile);
//       // console.log(newItems);
//       dispatch(getDataSliceActions.setCardItems(newItems));

//       dispatch(
//         uiAction.setGetServerCartListStatus({
//           status: "success",
//           title: "Sucsessfuly",
//           message: "get Cart Items sucsessfuly",
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiAction.setGetServerCartListStatus({
//           status: "error",
//           title: "Error",
//           message: error || "we have  problem in geting cart items",
//         })
//       );
//     }
//   };
// };

// export const setLocalStorageAmount = (selectedItem, amountVal) => {
//   return async (dispatch) => {
//     try {
//       dispatch(
//         uiAction.setGetServerCartListStatus({
//           status: "loading",
//           title: "Loading...",
//           message: "trying to get cart items",
//         })
//       );

//       const cartItems = getLocalStorageCartItems();
//       const { amount } = amountVal;
//       const changedArray = cartItems.map((item) => {
//         if (item._id === selectedItem) {
//           return { ...item, amount: amount };
//         }
//         return item;
//       });
//       const jsonFile = JSON.stringify(changedArray);
//       localStorage.setItem("cartItems", jsonFile);

//       dispatch(getDataSliceActions.setCardItems(changedArray));
//       dispatch(
//         uiAction.setGetServerCartListStatus({
//           status: "success",
//           title: "Sucsessfuly",
//           message: "get Cart Items sucsessfuly",
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiAction.setGetServerCartListStatus({
//           status: "error",
//           title: "Error",
//           message: error || "we have  problem in geting cart items",
//         })
//       );
//     }
//   };
// };
