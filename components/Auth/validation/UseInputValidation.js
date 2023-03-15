import { useReducer } from "react";

const initialstate = {
  inputValue: "",
  isTuched: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { inputValue: action.inputValue, isTuched: state.isTuched };

    case "TUCHED":
      return { inputValue: state.inputValue, isTuched: true };

    case "RESET":
      return { inputValue: "", isTuched: false };
  }
};

const useInputValidation = (validation) => {
  const [inputState, dispatchInputState] = useReducer(reducer, initialstate);

  const isValid = validation(inputState.inputValue);
  const errorStatus = !isValid && inputState.isTuched;

  const inputChangeHandler = (e) => {
    dispatchInputState({ type: "INPUT", inputValue: e.target.value });
  };

  const inputBlurHandler = () => {
    dispatchInputState({ type: "TUCHED" });
  };

  const reset = () => {
    dispatchInputState({ type: "RESET" });
  };
  return {
    value: inputState.inputValue,
    isValid,
    errorStatus,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInputValidation;
