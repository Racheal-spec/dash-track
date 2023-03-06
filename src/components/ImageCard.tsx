import React from "react";
import wine from "../assets/wine.jpg";

const ImageCard = () => {
  return (
    <div className="py-6">
      <div className="w-full h-full shadow-xl opacity-60 bg-greylight">
        <img src={wine} alt="dashtrack image" />
      </div>
    </div>
  );
};

export default ImageCard;
