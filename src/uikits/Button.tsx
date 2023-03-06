import React, { useContext } from "react";
import ApiContext from "../contexts/ApiContext";

type Btntitle = {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
const Button = ({ title, onClick }: Btntitle) => {
  const { isValidate } = useContext(ApiContext);
  return (
    <div>
      <button
        onClick={onClick}
        disabled={!isValidate}
        className={
          isValidate
            ? "px-4 hover:animate-ease cursor-pointer hover:bg-hoverColor hover:scale text-white py-2 bg-secondary"
            : "bg-textPlaceholder px-4 cursor-not-allowed text-white py-2"
        }
      >
        <p className="text-sm">{title}</p>
      </button>
    </div>
  );
};

export default Button;
