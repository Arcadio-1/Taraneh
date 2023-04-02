import { blogUiAction } from "../ui/blogUislice";
import { blogGetDataSliceActions } from "./BlogGetDataSlice";

export const getBlogPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(
        blogUiAction.setBlogPostsStatus({
          status: "loading",
          title: "Loading...",
          message: "در حال دریافت لیست محصولات",
        })
      );

      const request = await fetch("/api/blog/data/getAllPosts", {
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

      dispatch(blogGetDataSliceActions.setBlogPosts(data.data));

      dispatch(
        blogUiAction.setBlogPostsStatus({
          status: "success",
          title: "Successfuly...",
          message: "لیست محصولات با موفقیت دریافت شد",
        })
      );
    } catch (error) {
      blogUiAction.setBlogPostsStatus({
        status: "error",
        title: "Error...",
        message: error.message,
      });
    }
  };
};

export const getAdProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(
        blogUiAction.setBlogAdProductsStatus({
          status: "loading",
          title: "Loading...",
          message: "در حال دریافت لیست محصولات",
        })
      );

      const request = await fetch("/api/blog/data/getAdProducts", {
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

      dispatch(blogGetDataSliceActions.setBlogAdProducts(data.data));

      dispatch(
        blogUiAction.setBlogAdProductsStatus({
          status: "success",
          title: "Successfuly...",
          message: "لیست محصولات با موفقیت دریافت شد",
        })
      );
    } catch (error) {
      blogUiAction.setBlogAdProductsStatus({
        status: "error",
        title: "Error...",
        message: error.message,
      });
    }
  };
};
