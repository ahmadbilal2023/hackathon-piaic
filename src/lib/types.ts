import { StaticImageData } from "next/image";

export type ProductType = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: StaticImageData;
  tagline:string;
};
