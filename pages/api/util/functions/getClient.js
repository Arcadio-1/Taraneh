import { MongoClient } from "mongodb";

export const getClient = async (databaseName) => {
  try {
    const client = await MongoClient.connect(
      `${process.env.REACT_APP_MONGODB_2}${databaseName}?retryWrites=true&w=majority`
    );
    return client;
  } catch (error) {
    console.log("**************");
    throw new Error("خطا در برقراری ارتباط");
  }
};
