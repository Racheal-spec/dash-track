import React, { ReactNode } from "react";

type auditProp = {
  auditTitle: string;
  description: string;
  timing: string | ReactNode;
};

const BorderCard: React.FC<auditProp> = ({
  auditTitle,
  description,
  timing,
}) => {
  let learnLink = description.split("[")[1].split("(")[1];

  return (
    <div className="mr-3">
      <div className="py-2 px-3 h-36 border border-greenDark">
        <div>
          <p className="text-sm text-textHeaderDark font-bold">{auditTitle}</p>
        </div>
        <div className="py-1">
          <p className="text-invalid text-xl font-bold">{timing}</p>
        </div>
        <div>
          <p className="text-[11px] text-urlColor font-semibold">
            {description.split("[")[0]}
          </p>
          <a className="text-[11px] text-greenDark font-bold" href={learnLink}>
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default BorderCard;
