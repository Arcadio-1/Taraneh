export const priceFormat = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "decimal",
  }).format(value);
};

export const offPriceCalculator = (price, persent) => {
  const value = price - (price / 100) * persent;
  return value;
};

export const getLocalStorageCartItems = () => {
  const localStorageCartItemsJson = localStorage.getItem("cartItems");
  const cartItemsArray = [];

  if (localStorageCartItemsJson) {
    const localStorageItems = JSON.parse(localStorageCartItemsJson);
    Object.keys(localStorageItems).forEach((key, index) => {
      cartItemsArray.push(localStorageItems[key]);
    });
  }
  return cartItemsArray;
};

export const addProductToLocalStorageCart = (productId, orderingData) => {
  const localstorageCartItems = getLocalStorageCartItems();
  const { grind, weight, amount } = orderingData;

  const newItem = {
    [productId + grind + weight]: {
      id: productId + grind + weight,
      ProductId: productId,
      amount: amount,
      grind: grind,
      weight: weight,
    },
    ...localstorageCartItems,
  };

  const jsonFile = JSON.stringify(newItem);
  localStorage.setItem("cartItems", jsonFile);
};
