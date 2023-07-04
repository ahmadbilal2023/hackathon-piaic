import Image from "next/image";
import ProductCard from "./ProductCard";
import p1 from "/public/p1.png";
import p2 from "/public/p2.png";
import p3 from "/public/p3.png";
import p4 from "/public/p4.png";
import p5 from "/public/p5.png";
import p6 from "/public/p6.png";
import { products } from "@/lib/mock";
import { StaticImageData } from "next/image";

const Product = () => {
  const productArray = products.slice(0, 6);
  return (
    <div className="flex justify-around flex-wrap md:mt-48 mt-16 py-6">
      {productArray.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price}
          img={product.image as StaticImageData}
          category={product.category}
          id={product.id}
        />
      ))}
    </div>
  );
};

export default Product;
