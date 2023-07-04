import Hero from "@/view/Hero";
import Product from "@/view/Product";
import Promotion from "@/view/Promotion";
import MiddleSection from "@/view/middleSection";
import Subscribe from "@/view/subscribe";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Promotion />
      <Product />
      <MiddleSection />
      <Subscribe />
    </div>
  );
}
