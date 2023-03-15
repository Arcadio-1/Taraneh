import { ObjectId } from "mongodb";
import { varifiypassword, getHashedPassword } from "../../../lib/hashHelper";
import { getClient } from "../helper";

async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { changeType, newData, userId } = req.body;

      const client = await getClient("users");
      if (!client) {
        throw new Error("خطا در اتصال به سرور");
      }

      const db = client.db();

      const o_id = new ObjectId(userId);

      let request;

      switch (changeType) {
        case "personal":
          request = await db.collection("userList").findOneAndUpdate(
            { _id: o_id },
            {
              $set: {
                name: newData.name,
                family: newData.family,
                codeMeli: newData.codeMeli,
              },
            }
          );
          break;
        case "mobile":
          request = await db.collection("userList").findOneAndUpdate(
            { _id: o_id },
            {
              $set: {
                mobile: newData.mobile,
              },
            }
          );
          break;
        case "email":
          request = await db.collection("userList").findOneAndUpdate(
            { _id: o_id },
            {
              $set: {
                email: newData.email,
              },
            }
          );
          break;
        case "password":
          const newPassword = await getHashedPassword(newData.newPassword);
          const isValid = await varifiypassword(
            newData.oldPassword,
            newData.oldHashedPassword
          );
          if (!isValid) {
            throw new Error("پسورد فعلی صحیح نیست");
          }
          request = await db.collection("userList").findOneAndUpdate(
            { _id: o_id },
            {
              $set: {
                password: newPassword,
              },
            }
          );
          break;
        default:
          request = null;
      }

      if (!request) {
        throw new Error("Edit is Faild");
      }

      res
        .status(201)
        .json({
          status: "success",
          message: "تغییر کلمه با موفقیت انجام شد",
          request: request,
        });
    }
  } catch (error) {
    res
      .status(203)
      .json({ status: "error", message: error.message, request: null });
  }
}

export default handler;
