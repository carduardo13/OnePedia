import React, { useCallback } from "react";
import BannerItem from "./components/banner-item/banner-item.component";
import { colorClasses, sliderData } from "./data/slider-data";

function BannerSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleSetIndex = useCallback(
    (index: number) => {
      setCurrentIndex(index);
    },
    [setCurrentIndex]
  );

  const handleSlideChange = useCallback(() => {
    if (currentIndex === sliderData.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex]);

  React.useEffect(() => {
    const intervalId = setInterval(handleSlideChange, 10000);

    return () => clearInterval(intervalId);
  }, [currentIndex, handleSlideChange]);

  return (
    <div className="w-screen h-full flex items-center justify-center gap-4 flex-col">
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
      <div className="flex gap-4">
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
    </div>
  );
}

export default BannerSlider;
