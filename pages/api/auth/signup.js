import { getHashedPassword } from "../../../lib/hashHelper";
import { getClient } from "../util/functions/getClient";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  try {
    const { state, city, password, email, mobile, codeMeli } = req.body;

    const useExist = await existCheak(email, mobile, codeMeli);
    if (useExist) {
      throw new Error(useExist);
    }

    const stateAndCity = await getStateAndcity(state, city);
    const hashedPassword = await getHashedPassword(password);

    const person = {
      ...req.body,
      password: hashedPassword,
      stateName: stateAndCity.stateName,
      cityName: stateAndCity.cityName,
    };

    const client = await getClient("users");
    if (!client) {
      throw new Error("خطا در اتصال به سرور");
    }

    const db = client.db();

    const request = await db.collection("userList").insertOne(person);
    if (!request) {
      throw new Error("خطا در ثبت اطلاعات");
    }
    client.close();
    // const result = await request.json();
    res.status(200).json({ status: "success" });
  } catch (error) {
    res.status(201).json({
      status: "error",
      errorMessage: error.message,
      result: undefined,
    });
  }
}
export default handler;

const existCheak = async (email, mobile, codeMeli) => {
  const client = await getClient("users");
  const db = client.db();

  const isThisEmailExist = await db
    .collection("userList")
    .findOne({ email: email });
  const isThisMobileExist = await db
    .collection("userList")
    .findOne({ mobile: mobile });
  const isThisCodeMeliExist = await db
    .collection("userList")
    .findOne({ codeMeli: codeMeli });

  if (isThisEmailExist) {
    return "ایمیل شما ثبت شده است لطفا از قسمت ورود وارد شوید";
  }
  if (isThisMobileExist) {
    return "شماره موبایل شما ثبت شده است لطفا از قسمت ورود وارد شوید";
  }
  if (isThisCodeMeliExist) {
    return "کد ملی شما ثبت شده است لطفا از قسمت ورود وارد شوید";
  }
  return null;
};

const getStateAndcity = async (stateId, cityId) => {
  const client = await getClient("helper-data");
  const db = client.db();
  const stateRequest = await db.collection("states").findOne({ _id: stateId });
  const cityRequest = await db.collection("cities").findOne({ _id: cityId });
  client.close();
  return {
    stateName: stateRequest.state,
    cityName: cityRequest.city,
  };
};
