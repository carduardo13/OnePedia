import Image from "next/image";
import React from "react";

function BannerSlider() {
  return (
    <div
      className="
    w-full
    md:w-2/5
    mdh-2/5 
    bg-[#ff4400a9] 
    text-white 
    text-5xl 
    flex
    flex-col
    sm:flex-row
    items-center 
    sm:justify-around 
    sm:rounded-lg
    "
    >
      <h2 className="animate-fade">Moneky D.Luffy</h2>
      <Image
        alt="luffy-pic"
        src={
          "https://utfs.io/f/e0a26dae-bcb3-4073-9bae-e7cb03e83451-1pinps.png"
        }
        width={400}
        height={400}
        className="animate-fade-up animate-delay-[300ms] animate-ease-in-out"
      />
    </div>
  );
}

export default BannerSlider;
