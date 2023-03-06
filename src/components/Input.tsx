import React, { useContext, useState } from "react";
import { API_KEY } from "../ApiRoutes";
import ApiContext from "../contexts/ApiContext";

const Input = () => {
  const { inputText, handleInput, isValidate } = useContext(ApiContext);

  console.log(inputText, isValidate);

  return (
    <div className="">
      <input
        className="bg-inputbg py-2 w-full text-white placeholder:text-textPlaceholder placeholder:text-xs placeholder: pl-2"
        placeholder="Enter a web page URL"
        onChange={handleInput}
        type="text"
      />
    </div>
  );
};

export default Input;
