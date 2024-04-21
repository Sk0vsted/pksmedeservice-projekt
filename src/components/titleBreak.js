import React from "react";

const titleBreak = ({ title, subtitle, bgClass, subtitleColor, titleColor }) => {
    return (
        <div className={`title w-full pt-10 pb-0 ${bgClass}`}>
        <h1 className={`text-xl text-center ${subtitleColor} font-semibold pt-3 font-ubuntu`}>
            {subtitle}
        </h1>
        <p className={`text-center ${titleColor} text-4xl font-semibold pt-3 font-roboto`}>
            {title}
        </p>
        </div>
    );
    };

export default titleBreak;