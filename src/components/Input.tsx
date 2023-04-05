import React, { useContext } from "react";
import ApiContext from "../contexts/ApiContext";

const Input: React.FC = () => {
  const { inputText, handleInput, handleSend, isValidate } =
    useContext(ApiContext);

  const onKeyPress = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Enter") {
      handleSend?.(event);
    }
  };

  return (
    <div className="">
      <input
        className="py-3 w-full bg-lightgreenbg focus:outline-none  focus:border-2 focus:border-greenDark  text-urlColor placeholder:text-textPlaceholder placeholder:text-xs placeholder: pl-2"
        placeholder="Enter a web page URL"
        onChange={handleInput}
        onKeyDown={onKeyPress}
        type="text"
        value={inputText}
      />
    </div>
  );
};

export default Input;
