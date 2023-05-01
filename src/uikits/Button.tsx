import React, { useContext } from "react";
import ApiContext from "../contexts/ApiContext";

type Btntitle = {
  title: string;
  outline?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
};
const Button = ({ title, onClick, disabled, className, outline }: Btntitle) => {
  const { isValidate } = useContext(ApiContext);
  return (
    <div>
      {outline ? (
        <button
          onClick={onClick}
          disabled={!isValidate}
          className={
            "font-semibold px-4 py-[8px] border hover:animate-ease cursor-pointer hover:text-secondary hover:scale"
          }
        >
          <p className="text-sm">{title}</p>
        </button>
      ) : (
        <button onClick={onClick} disabled={disabled} className={className}>
          <p className="text-sm">{title}</p>
        </button>
      )}
    </div>
  );
};

export default Button;
