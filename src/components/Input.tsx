import React, { useContext, useEffect } from "react";
import ApiContext from "../contexts/ApiContext";

const Input: React.FC = () => {
  const { inputText, handleInput, handleSend, isValidate } =
    useContext(ApiContext);

  const onKeyPress = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Enter") {
      handleSend?.(event);
    }
  };

  useEffect(() => {
    localStorage.setItem("textKey", JSON.stringify(inputText));
  }, [inputText]);

  return (
    <div className="">
      <input
        className="py-3 w-full bg-lightgreenbg dark:bg-darkInputBg focus:outline-none  focus:border-2 focus:border-secondary dark:focus:border-secondary  text-urlColor dark:text-greylight placeholder:text-textPlaceholder placeholder:text-xs placeholder: pl-2"
        placeholder="Enter a web page URL"
        onChange={handleInput}
        name="url"
        onKeyDown={onKeyPress}
        autoComplete="on"
        type="text"
        value={inputText}
      />
    </div>
  );
};

export default Input;
