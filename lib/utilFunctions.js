export const priceFormat = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "decimal",
  }).format(value);
};

export const offPriceCalculator = (price, persent) => {
  const value = price - (price / 100) * persent;
  return value;
};

// export const getCartList = (items) => {
//   const listArray = [];
//   // console.log(items);
//   if (!items) {
//     return;
//   }
//   items.map(async (item) => {
//     const request = await fetch(
//       `/api/helperAPI/getSingleProduct/${item.ProductId}`,
//       {
//         method: "GET",
//       }
//     );
//     if (!request) {
//       throw new Error("request fucked");
//     }
//     const data = await request.json();
//     listArray.push({ ...data.product, ...item });
//     console.log(listArray);
//     return listArray;
//   });
//   return listArray;
//   // console.log(orderList);
// };
