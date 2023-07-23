const getFromJson = async (fileName) => {
  const request = await fetch(`/jsons/${fileName}.json`);
  const data = await request.json();
  console.log(data);
  const dataArray = [];
  for (const key in data) {
    dataArray.push({
      ...data[key],
    });
  }
  return dataArray;
};
export default getFromJson;
