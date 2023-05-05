import React, { ReactNode, useState } from "react";
import { HiArrowDownOnSquare } from "react-icons/hi2";
import { HiArrowUpOnSquare } from "react-icons/hi2";

interface IProps {
  open?: boolean;
  title1: string;
  title2: string;
  title3?: string;
  children: ReactNode;
}

const Collapsible: React.FC<IProps> = ({
  title1,
  title2,
  title3,
  children,
  open,
}) => {
  const [isOpen, setOpen] = useState(open);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="grid text-sm lg:grid-cols-[1fr_1fr_1fr] max-sm:grid-cols-[2fr_1fr_0fr] md:grid-cols-[1fr_1fr_1fr] bg-lightgreenbg dark:bg-darkSmallCardColor dark:bg-opacity-25 text-secondary dark:text-offwhite px-3">
        <div className="font-bold py-4">{title1}</div>
        <div className="font-bold py-4 ">{title2}</div>
        <div className="py-4 flex" onClick={handleOpen}>
          <p className="font-bold px-5">{title3}</p>
          <div className="dark:text-offwhite text-secondary cursor-pointer ">
            {isOpen ? (
              <HiArrowUpOnSquare size="1.3em" />
            ) : (
              <HiArrowDownOnSquare size="1.3em" />
            )}
          </div>
        </div>
      </div>
      <div>
        {isOpen && (
          <div className="border-b-1 max-sm:text-xs border-opacity-25 border-greylight">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapsible;
