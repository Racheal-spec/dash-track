import React from "react";

const Input = () => {
  return (
    <div className="py-14">
      <input
        className="bg-inputbg py-1 w-full text-white placeholder:text-textPlaceholder placeholder:text-xs placeholder: pl-2"
        placeholder="Enter a web page URL"
      />
    </div>
  );
};

export default Input;
