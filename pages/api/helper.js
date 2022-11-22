import { MongoClient } from "mongodb";

export const getClient = async (databaseName) => {
  const client = await MongoClient.connect(
    `${process.env.REACT_APP_MONGODB}${databaseName}?retryWrites=true&w=majority`
  );
  return client;
};
