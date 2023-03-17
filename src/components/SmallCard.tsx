import React, { useContext } from "react";
import ApiContext from "../contexts/ApiContext";

type SmallcardProps = {
  metricstitle: string;
  timing: number | string | JSX.Element;
  italictext: string;
};
const SmallCard = ({ metricstitle, timing, italictext }: SmallcardProps) => {
  return (
    <div>
      <div className="py-5 h-28 px-8 bg-smallcardColor font-bold border-r-[1.5px] border-l-textPlaceholder">
        <p className="text-center text-[12px] text-urlColor">{metricstitle}</p>
        <p className="text-[9px] italic text-lineColor mb-3">{italictext}</p>
        <p className="text-center text-2xl font-semibold">{timing}</p>
      </div>
    </div>
  );
};

export default SmallCard;
