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

      const request = await fetch("/api/shop/data/getAllProducts/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await request.json();
      if (data.status === "error") {
        throw new Error("خطا در دریافت اطلاعات لیست محصولات");
      }

      dispatch(getDataSliceActions.getProducts(data.products));

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

export const getOrederList = (id) => {
  return async (dispatch) => {
    try {
      dispatch(
        uiAction.setCartListStatus({
          status: "loading",
          title: "در حال دریافت لیست خرید",
          message: "در حال دریافت لیست خرید از سرور",
        })
      );

      const orders = await fetch(`/api/shop/data/getOrderList/${id}`, {
        method: "GET",
      });
      if (!orders.ok) {
        console.log(orders);
        dispatch(getDataSliceActions.setCardItems([]));
      }
      const response = await orders.json();
      if (response.status !== "success") {
        throw new Error("خطا در دریافت لیست خرید");
      }
      if (response.orderList) {
        dispatch(getDataSliceActions.setCardItems(response.orderList.orders));
      }
      if (!response.orderList) {
        dispatch(getDataSliceActions.setCardItems([]));
      }
      dispatch(
        uiAction.setCartListStatus({
          status: "success",
          title: "با موفقیت انجام شد",
          message: "لیست خرید با موفقیت دریافت شد",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.setCartListStatus({
          status: "error",
          title: "خطا در دریافت لیست خرید",
          message: error.message || "خطا در دریافت لیست خرید",
        })
      );
    }
  };
};

export const getCartItemsData = (items) => {
  return async (dispatch) => {
    try {
      dispatch(
        uiAction.setCartListDataStatus({
          status: "loading",
          title: "در حال بررسی",
          message: "در حال دریافت اطلاعات لیست سفارشات",
        })
      );
      const mylist = [];
      const cartListArray = await items.map(async (item) => {
        const request = await fetch(
          `/api/shop/data/getSingleProduct/${item.ProductId}`,
          {
            method: "GET",
          }
        );
        if (!request) {
          throw new Error("خطا در دریافت اطلاعات لیست سفارشات");
        }
        const data = await request.json();
        if (data.status !== "success") {
          throw new Error("خطا در دریافت اطلاعات لیست سفارشات");
        }
        return await { ...data.product, ...item };
      });
      mylist.push({ ...cartListArray });
      var arrayOfValues = await Promise.all(cartListArray);
      dispatch(getDataSliceActions.setCardItemsData(arrayOfValues));
      // console.log(arrayOfValues);
      dispatch(
        uiAction.setCartListDataStatus({
          status: "success",
          title: "با موفقیت دریافت شد",
          message: "اطلاعات لیست سفارشات با موفقیت دریافت شد",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.setCartListDataStatus({
          status: "error",
          title: "Error",
          message: error.message || "خطا در دریافت اطلاعات لیست سفارشات",
        })
      );
    }
  };
};
