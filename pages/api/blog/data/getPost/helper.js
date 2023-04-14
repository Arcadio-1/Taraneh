import { getClient } from "../../../util/functions/getClient";

export const getPost = async (id) => {
  try {
    const client = await getClient("blog");
    if (!client) {
      throw new Error(client.error || "عدم دسترسی به سرور");
    }
    const db = client.db();
    const post = await db.collection("blogPostsLong").findOne({ _id: id });
    // console.log(post);
    if (!post) {
      return {
        status: "notfound",
        message: "مطلب یافت نشد",
        post: null,
      };
    }
    return {
      status: "success",
      message: "مطلب یافت شد",
      post: post,
    };
  } catch (error) {
    return {
      status: "error",
      message: "خطا در دریافت اطلاعات",
      post: null,
    };
  }
};
