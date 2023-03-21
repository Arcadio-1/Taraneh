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
      _id: productId + grind + weight,
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

export const jalaliToGregorian = (date) => {
  const splitDate = date.split("/");
  console.log(splitDate[0]);

  const JalaliDate = {
    g_days_in_month: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    j_days_in_month: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29],
  };
  if (splitDate.length > 0) {
    const j_y = parseInt(splitDate[0]);
    const j_m = parseInt(splitDate[1]);
    const j_d = parseInt(splitDate[2]);

    const jy = j_y - 979;
    const jm = j_m - 1;
    const jd = j_d - 1;

    let j_day_no =
      365 * jy + parseInt(jy / 33) * 8 + parseInt(((jy % 33) + 3) / 4);
    for (let i = 0; i < jm; ++i) j_day_no += JalaliDate.j_days_in_month[i];

    j_day_no += jd;

    let g_day_no = j_day_no + 79;

    let gy =
      1600 +
      400 *
        parseInt(
          g_day_no / 146097
        ); /* 146097 = 365*400 + 400/4 - 400/100 + 400/400 */
    g_day_no = g_day_no % 146097;

    let leap = true;
    if (g_day_no >= 36525) {
      /* 36525 = 365*100 + 100/4 */
      g_day_no--;
      gy +=
        100 *
        parseInt(g_day_no / 36524); /* 36524 = 365*100 + 100/4 - 100/100 */
      g_day_no = g_day_no % 36524;

      if (g_day_no >= 365) g_day_no++;
      else leap = false;
    }

    gy += 4 * parseInt(g_day_no / 1461); /* 1461 = 365*4 + 4/4 */
    g_day_no %= 1461;

    if (g_day_no >= 366) {
      leap = false;

      g_day_no--;
      gy += parseInt(g_day_no / 365);
      g_day_no = g_day_no % 365;
    }

    for (
      var i = 0;
      g_day_no >= JalaliDate.g_days_in_month[i] + (i == 1 && leap);
      i++
    ) {
      g_day_no -= JalaliDate.g_days_in_month[i] + (i == 1 && leap);
    }
    let gm = i + 1;
    let gd = g_day_no + 1;

    gm = gm < 10 ? "0" + gm : gm;
    gd = gd < 10 ? "0" + gd : gd;
    return [gy, gm, gd];
  }
};

export const fixNumbers = (str) => {
  const persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ];
  const arabicNumbers = [
    /٠/g,
    /١/g,
    /٢/g,
    /٣/g,
    /٤/g,
    /٥/g,
    /٦/g,
    /٧/g,
    /٨/g,
    /٩/g,
  ];
  if (typeof str === "string") {
    for (var i = 0; i < 10; i++) {
      str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
    }
  }
  return str;
};
