import React from "react";

const Title = ({
  title,
  bgClass,
  titleColor,
  alignment = "items-center",
  textSize = "text-4xl",
  paddingTop = "pt-12",
}) => (
  <div
    className={`flex flex-col ${alignment} justify-center ${paddingTop} ${bgClass}`}
  >
    <h1 className={`${textSize} font-bold font-roboto ${titleColor}`}>
      {title}
    </h1>
  </div>
);

export default Title;
