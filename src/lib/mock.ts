import { ProductType } from "./types";
import p1 from "/public/p1.png";
import p2 from "/public/p2.png";
import p3 from "/public/p3.png";
import p4 from "/public/p4.png";
import p5 from "/public/p5.png";
import p6 from "/public/p6.png";
import p7 from "/public/p7.png";

export const products: ProductType[] = [
  {
    id: 1,
    name: "Product 1",
    price: 20,
    category: "Female",
    image: p1,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    category: "Female",
    image: p2,
  },
  {
    id: 3,
    name: "Product 3",
    price: 250,
    category: "Female",
    image: p3,
  },
  {
    id: 4,
    name: "Product 4",
    price: 300,
    category: "Female",
    image: p7,
  },
  {
    id: 5,
    name: "Product 5",
    price: 400,
    category: "Male",
    image: p5,
  },
  {
    id: 6,
    name: "Product 6",
    price: 500,
    category: "Kids",
    image: p6,
  },
];
