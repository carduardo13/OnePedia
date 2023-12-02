"use client";
import Image from "next/image";
import React, { useState, useCallback, useMemo } from "react";
import { colorClasses } from "../../data/slider-data";
import { IBannerItem } from "./banner-item.types";

function BannerItem({ color, imageUrl, namePirate }: IBannerItem) {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseEnter = useCallback(() => {
    setIsHover(true);
  }, [setIsHover]);

  const handleMouseLeave = useCallback(() => {
    setIsHover(false);
  }, [setIsHover]);

  // Verifica se a cor fornecida está no mapeamento
  const colorClass = useMemo(() => colorClasses[color] || "", [color]);

  return (
    <div
      className={`
        w-full
        md:w-2/5
        md:h-2/5 
        ${colorClass}
        text-white
        flex
        flex-col
        sm:flex-row
        items-center 
        sm:justify-around 
        md:rounded-lg
        `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className=" w-full md:w-60 md:h-16 p-2 bg-[#ffffff56] flex items-center justify-center md:rounded-md shadow-md">
        <h2
          className={`text-3xl md:text-4xl font-bold animate-fade shadow-sm text-[#000000bb]`}
        >
          {namePirate}
        </h2>
      </div>
      <div
        className={`${
          isHover
            ? "transform rotate-3 transition delay-75 duration-500 ease-in-out"
            : "transform rotate-0 transition delay-75 duration-500 ease-in-out"
        }`}
      >
        <Image
          alt="luffy-pic"
          src={imageUrl}
          width={350}
          height={350}
          className="animate-fade-up animate-delay-[200ms] animate-ease-in-out w-[300px] h-[300px]"
        />
      </div>
    </div>
  );
}

export default BannerItem;
