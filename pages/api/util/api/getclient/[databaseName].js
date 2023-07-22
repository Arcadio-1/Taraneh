async function handler(req, res) {
  if (req.method === "GET") {
    const databaseName = req.query.databaseName;
    try {
      const client = await MongoClient.connect(
        `${process.env.REACT_APP_MONGODB}${databaseName}?retryWrites=true&w=majority`
      );

      res.status(200).json({ status: "success", client });
    } catch (error) {
      res.status(504).json({
        status: "error",
        errorMsg: error,
        error: "خطا در برقراری ارتباط",
      });
    }
  }
}
export default handler;
