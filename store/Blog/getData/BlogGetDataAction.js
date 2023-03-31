import { blogGetDataSliceActions } from "./BlogGetDataSlice";

export const blogGetBlogNavLinks = () => {
  return async (dispatch) => {
    try {
      const request = await fetch("/api/blog/ui/getNavLinks", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!request.ok) {
        throw new Error(data.error, "geting BlogNav Links Went Wrong");
      }
      const response = await request.json();

      const links = [];
      for (const key in response.data) {
        links.push({
          id: key,
          title: response.data[key].title,
          path: response.data[key].link,
        });
      }
      dispatch(blogGetDataSliceActions.blogGetNavLinks(links));
    } catch (error) {
      console.log(error);
    }
  };
};
