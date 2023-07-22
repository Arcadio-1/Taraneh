import { ObjectId } from "mongodb";
import { varifiypassword, getHashedPassword } from "../../../lib/hashHelper";
import { getClient } from "../util/functions/getClient";

async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { changeType, newData, userId } = req.body;

      const client = await getClient("users");
      if (!client) {
        client.close();
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
          client.close();
          res.status(201).json({
            status: "success",
            message: "تغییر مشخصات با موفقیت انجام شد",
            request: request,
          });
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
          client.close();
          res.status(201).json({
            status: "success",
            message: "تغییر شماره موبایل با موفقیت انجام شد",
            request: request,
          });
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
          client.close();
          res.status(201).json({
            status: "success",
            message: "تغییر ایمیل با موفقیت انجام شد",
            request: request,
          });
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
          client.close();
          res.status(201).json({
            status: "success",
            message: "تغییر کلمه با موفقیت انجام شد",
            request: request,
          });
          break;
        case "birthdate":
          request = await db.collection("userList").findOneAndUpdate(
            { _id: o_id },
            {
              $set: {
                birthdate: newData.birthdate,
              },
            }
          );
          client.close();
          res.status(201).json({
            status: "success",
            message: "تغییر تاریخ تولد با موفقیت انجام شد",
            request: request,
          });
          break;
        default:
          request = null;
      }

      if (!request) {
        client.close();

        throw new Error("Edit is Faild");
      }
    }
  } catch (error) {
    client.close();

    res.status(203).json({
      status: "error",
      message: error.message || "خطا در ثبت اطلاعات",
      request: null,
    });
  }
}

export default handler;
