import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  product: {
    grind: 0,
    weight: 0,
    amount: 1,
  },
};
const sendDataSlice = createSlice({
  name: "sendDataSlice",
  initialState,
  reducers: {
    setProduct(state, action) {
      switch (action.payload.type) {
        // case "setAmount":
        //   state.product = {
        //     grind: state.product.grind,
        //     amount: action.payload.amount,
        //     weight: state.product.weight,
        //   };
        //   return;
        case "setGrind":
          state.product = {
            grind: action.payload.grind,
            amount: state.product.amount,
            weight: state.product.weight,
          };
          return;
        case "setWeight":
          state.product = {
            grind: state.product.grind,
            amount: state.product.amount,
            weight: action.payload.weight,
          };
          return;
        default:
          state.product = {
            grind: state.product.grind,
            amount: state.product.amount,
            weight: state.product.weight,
          };
      }
    },
  },
});

export const sendDataAction = sendDataSlice.actions;
export default sendDataSlice.reducer;
