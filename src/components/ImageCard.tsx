import React from "react";
import wine from "../assets/wine.jpg";

const ImageCard = () => {
  return (
    <div className="py-6">
      <div className="w-72 h-52 shadow-xl opacity-60 bg-greylight">
        <img src={wine} alt="dashtrack image" />
      </div>
    </div>
  );
};

export default ImageCard;
