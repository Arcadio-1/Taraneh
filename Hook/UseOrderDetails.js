import React, { useReducer } from "react";

const initialState = {
  grind: 0,
  grindAlert: false,
  weight: 0,
  weightAlert: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "grind":
      return {
        grind: action.grind,
        grindAlert: false,
        weight: state.weight,
        weightAlert: state.weightAlert,
      };
    case "weight":
      return {
        grind: state.grind,
        grindAlert: state.grindAlert,
        weight: action.weight,
        weightAlert: false,
      };
    case "weightAlert":
      return {
        grind: state.grind,
        grindAlert: state.grindAlert,
        weight: state.weight,
        weightAlert: true,
      };
    case "grindAlert":
      return {
        grind: state.grind,
        grindAlert: true,
        weight: state.weight,
        weightAlert: state.weightAlert,
      };
    default:
      throw new Error("specific type of change");
  }
}
const useOrderDetails = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    grind: state.grind,
    grindAlert: state.grindAlert,
    weight: state.weight,
    weightAlert: state.weightAlert,
    dispatch,
  };
};

export default useOrderDetails;
