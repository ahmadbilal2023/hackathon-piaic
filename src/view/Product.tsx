import Image from "next/image";
import ProductCard from "./ProductCard";
import p1 from "/public/p1.png";
import p2 from "/public/p2.png";
import p3 from "/public/p3.png";
import p4 from "/public/p4.png";
import p5 from "/public/p5.png";
import p6 from "/public/p6.png";

const Product = () => {
  return (
    <div className="flex justify-around flex-wrap md:mt-48 mt-8">
      <ProductCard title="Flex Sweatshirt" price={104} img={p1} />
      <ProductCard title="Cameryen" price={545} img={p2} />
      <ProductCard title="Flex Sweatshirt" price={104} img={p3} />
      <ProductCard title="Flex Sweatshirt" price={104} img={p4} />
      <ProductCard title="Flex Sweatshirt" price={104} img={p5} />
      <ProductCard title="Flex Sweatshirt" price={104} img={p6} />
    </div>
  );
};

export default Product;
