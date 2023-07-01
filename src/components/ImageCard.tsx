import React from "react";

interface ImageProp {
  img: string;
}
const ImageCard: React.FC<ImageProp> = ({ img }) => {
  return (
    <div className="py-6 max-sm:py-3">
      <div className="w-full h-full shadow-xl border-4 dark:border-8 dark:border-secondary border-primaryDark opacity-80">
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
