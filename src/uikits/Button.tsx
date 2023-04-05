import React, { useContext } from "react";
import ApiContext from "../contexts/ApiContext";

type Btntitle = {
  title: string;
  outline?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
const Button = ({ title, onClick, outline }: Btntitle) => {
  const { isValidate } = useContext(ApiContext);
  return (
    <div>
      {outline ? (
        <button
          onClick={onClick}
          disabled={!isValidate}
          className={
            "font-semibold px-4 py-[8px] border border- hover:animate-ease cursor-pointer hover:text-hoverColor hover:scale"
          }
        >
          <p className="text-sm">{title}</p>
        </button>
      ) : (
        <button
          onClick={onClick}
          disabled={!isValidate}
          className={
            isValidate
              ? "px-4 py-[10px] font-semibold hover:animate-ease cursor-pointer hover:bg-hoverColor hover:scale text-white  bg-secondary"
              : "bg-textPlaceholder px-4 cursor-not-allowed text-white py-2"
          }
        >
          <p className="text-sm">{title}</p>
        </button>
      )}
    </div>
  );
};

export default Button;
