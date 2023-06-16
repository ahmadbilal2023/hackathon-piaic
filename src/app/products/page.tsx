import ProductCard from "@/view/ProductCard";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { products } from "@/lib/mock";

const allProduct = () => {
  return (
    <div className="flex justify-around flex-wrap md:mt-34 mt-8 py-6">
      {products.map((product) => (
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

export default allProduct;
