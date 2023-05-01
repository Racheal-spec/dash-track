import React from "react";

interface ImageProp {
  img: string;
}
const ImageCard: React.FC<ImageProp> = ({ img }) => {
  return (
    <div className="py-6">
      <div className="w-full h-full shadow-xl p-5 opacity-80 bg-secondary">
        <img
          className="w-128 h-72 object-cover"
          src={img}
          alt="dashtrack image"
        />
      </div>
    </div>
  );
};

export default ImageCard;
