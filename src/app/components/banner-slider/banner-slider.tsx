"use client";
import React, { useCallback } from "react";
import BannerItem from "./components/banner-item/banner-item.component";
import BnnerDots from "./components/banner-dots/banner-dots";
import { IBannerSlider } from "./banner-slider.types";

function BannerSlider({ bannerData }: IBannerSlider) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleSetIndex = useCallback(
    (index: number) => {
      setCurrentIndex(index);
    },
    [setCurrentIndex]
  );

  const handleSlideChange = useCallback(() => {
    if (currentIndex === bannerData.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, bannerData.length]);

  React.useEffect(() => {
    const intervalId = setInterval(handleSlideChange, 10000);

    return () => clearInterval(intervalId);
  }, [currentIndex, handleSlideChange]);

  return (
    <div className="w-screen h-full flex items-center justify-center gap-4 flex-col">
      {bannerData.map(
        (item, index) =>
          index === currentIndex && (
            <BannerItem
              key={item.namePirate}
              color={item.color}
              imageUrl={item.imageUrl}
              namePirate={item.namePirate}
            />
          )
      )}
      <BnnerDots
        currentIndex={currentIndex}
        handleSetIndex={handleSetIndex}
        sliderData={bannerData}
      />
    </div>
  );
}

export default BannerSlider;
