import { IBannerItem } from "../banner-item/banner-item.types";

export interface IBannerDots {
  sliderData: IBannerItem[];
  currentIndex: number;
  handleSetIndex: (index: number) => void;
}
