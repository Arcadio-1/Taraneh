import { getClient } from "../../../helper";

export const getComment = async (id) => {
  try {
    const client = await getClient("blog");
    if (!client) {
      throw new Error(client.error || "عدم دسترسی به سرور");
    }
    const db = client.db();
    const comment = await db.collection("comments").findOne({ _id: id });
    console.log(comment);
    // console.log(comment);
    if (!comment) {
      return {
        status: "notfound",
        message: "کامنت یافت نشد",
        comment: null,
      };
    }
    return {
      status: "success",
      message: "کامنت یافت شد",
      comment: comment,
    };
  } catch (error) {
    return {
      status: "error",
      message: "خطا در دریافت اطلاعات",
      comment: null,
    };
  }
};
