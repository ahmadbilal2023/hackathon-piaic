import { StaticImageData } from "next/image";

export type ProductType = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: StaticImageData;
};
