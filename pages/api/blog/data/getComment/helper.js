import { getClient } from "../../../util/functions/getClient";

export const getComment = async (id) => {
  try {
    const client = await getClient("blog");
    if (!client) {
      client.close();
      throw new Error(client.error || "عدم دسترسی به سرور");
    }
    const db = client.db();
    const comment = await db.collection("comments").findOne({ _id: id });
    // console.log(comment);
    client.close();
    if (!comment) {
      return {
        status: "notfound",
        message: "کامنت یافت نشد",
        comment: { comments: [] },
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
