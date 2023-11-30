import React, { useCallback } from "react";
import BannerItem from "./components/banner-item/banner-item.component";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { sliderData } from "./data/slider-data";

function BannerSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = useCallback(() => {
    if (currentIndex === sliderData.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }, [setCurrentIndex, currentIndex]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }, [setCurrentIndex, currentIndex]);

  return (
    <div className="w-screen h-full flex flex-row items-center justify-center gap-4">
      <FaArrowLeft onClick={handlePrev} />
      {sliderData
        .map((item) => (
          <BannerItem
            key={item.namePirate}
            color={item.color}
            imageUrl={item.imageUrl}
            namePirate={item.namePirate}
          />
        ))
        .filter((e, index) => index === currentIndex)}
      <FaArrowRight onClick={handleNext} />
    </div>
  );
}

export default BannerSlider;
