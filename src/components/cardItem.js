import React from "react";

const CardItem = ({
  title,
  description,
  image,
  hashtag1,
  hashtag2,
  hashtag3,
  bgColor,
  alt,
}) => {
  return (
    <div
      className={`max-w-sm rounded-lg overflow-hidden flex flex-col shadow-lg mx-4 lg:mb-0 mb-12 transition ease-in-out hover:drop-shadow-2xl duration-200 ${bgColor}`}
    >
      <img className="w-full h-1258" src={image} alt={alt} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base font-ubuntu">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex-grow mt-auto">
        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold border border-dark text-gray-700 mr-2 mb-2 hover:text-light hover:bg-dark select-none transition ease-in-out duration-200">
          {hashtag1}
        </span>
        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold border border-dark text-gray-700 mr-2 mb-2 hover:text-light hover:bg-dark select-none transition ease-in-out duration-200">
          {hashtag2}
        </span>
        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold border border-dark text-gray-700 mr-2 mb-2 hover:text-light hover:bg-dark select-none transition ease-in-out duration-200">
          {hashtag3}
        </span>
      </div>
    </div>
  );
};

export default CardItem;
