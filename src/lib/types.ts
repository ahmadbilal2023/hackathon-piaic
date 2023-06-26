import { StaticImageData } from "next/image";

export type ProductType = {
  id: number;
  name: string;
  price: string;
  category: string;
  image: StaticImageData;
  tagline:string;
};
