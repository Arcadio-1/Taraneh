import { useState } from "react";

const useEditInfo = (validation, defaultValue) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const isValid = validation(inputValue);
  const errorStatus = !isValid;

  const inputChangeHandler = (e) => {
    setInputValue((prev) => {
      return (prev = e.target.value);
    });
  };

  return {
    value: inputValue,
    isValid,
    errorStatus,
    inputChangeHandler,
  };
};

export default useEditInfo;
