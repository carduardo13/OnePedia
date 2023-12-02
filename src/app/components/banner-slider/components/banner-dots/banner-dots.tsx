"use client";
import React from "react";
import { colorClasses } from "../../data/slider-data";
import { IBannerDots } from "./banner-dots.types";

function BnnerDots({ sliderData, currentIndex, handleSetIndex }: IBannerDots) {
  return (
    <div className="flex gap-4 hover:cursor-pointer">
      {sliderData.map((dot, index) => (
        <div
          onClick={() => handleSetIndex(index)}
          key={index}
          className={`
      rounded-full ${currentIndex === index && colorClasses[dot.color]} 
      ${currentIndex !== index && "bg-[#80808065]"}
       h-3 w-3`}
        ></div>
      ))}
    </div>
  );
}

export default BnnerDots;
