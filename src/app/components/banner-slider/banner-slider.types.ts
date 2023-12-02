import { IPirate } from "@/interfaces/pirate";

export interface IBannerItem {
  namePirate: string;
  color: string;
  imageUrl: string;
}

export type TColorClasses = {
  [key: string]: string;
};

export interface IBannerSlider {
  bannerData: IPirate[];
}
