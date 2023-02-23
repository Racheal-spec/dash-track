import React from "react";

type Btntitle = {
  title: string;
};
const Button = ({ title }: Btntitle) => {
  return (
    <div>
      <div className="px-2 hover:animate-ease cursor-pointer hover:bg-hoverColor hover:scale text-white py-1 bg-secondary">
        {title}
      </div>
    </div>
  );
};

export default Button;
