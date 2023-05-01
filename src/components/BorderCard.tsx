import React, { ReactNode } from "react";
import { auditSingleProp } from "../Types/BorderProp";
import { LearnLink } from "../utils/globalFunc";

const BorderCard: React.FC<auditSingleProp> = ({
  auditTitle,
  description,
  timing,
}) => {
  let learnLink = description.split("[")[1].split("(")[1];

  return (
    <div className="mr-3">
      <div className="py-2 px-3 h-36 border  border-primaryColor dark:border-secondary">
        <div>
          <p className="text-sm text-textHeaderDark dark:text-offwhite font-bold">
            {auditTitle}
          </p>
        </div>
        <div className="py-1 ">
          <p className="text-xl font-bold">{timing}</p>
        </div>
        <div>
          <p className="text-[11px] dark:text-textDark text-urlColor font-semibold">
            {description.split("[")[0]}
          </p>
          <a
            className="text-[11px] text-primaryColor font-bold"
            href={LearnLink(description)}
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default BorderCard;
