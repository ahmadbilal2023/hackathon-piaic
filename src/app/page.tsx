import Hero from "@/view/Hero";
import Product from "@/view/Product";
import MiddleSection from "@/view/middleSection";
import Subscribe from "@/view/subscribe";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
    <Product/>
    <MiddleSection/>
    <Subscribe/>
    </div>
  );
}
