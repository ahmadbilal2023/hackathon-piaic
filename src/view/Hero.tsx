import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import heroImage from "../../public/hero-img.webp";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Bazar from "../../public/bazar.webp";
import Bustle from "../../public/bustle.webp";
import Instyle from "../../public/instyle.webp";
import Verse from "../../public/verse.webp";

const Hero = () => {
  return (
    <section className="flex py-8 flex-col gap-y-10 lg:flex-row  ">
      {/* Left Div */}
      <div className="space-y-8 flex-1">
        <Badge className="bg-blue-100 py-3 px-6 text-blue-700 hover:text-white rounded-none font-bold">
          Sale 70%
        </Badge>
        <h1 className="scroll-m-20 text-2xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">
          An Industrial Take on Streetwear
        </h1>
        <p>
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button className="bg-black text-base h-6 md:h-12 px-8 py-8 rounded-none font-bold md:text-2xl">
          <ShoppingCart className="mr-3" /> Start Shopping
        </Button>
        <div className="flex flex-row md:justify-start flex-wrap md:gap-x-16 gap-x-5">
          <Image src={Bazar} alt="bazar log" className="md:mt-20" />
          <Image src={Bustle} alt="bustle log" className="md:mt-20 " />
          <Image src={Verse} alt="verse log" className="md:mt-20 " />
          <Image src={Instyle} alt="instyle log" className="md:mt-20 " />
        </div>
      </div>

      {/* Right Div */}
      <div className="flex-1">
        <div className="relative flex mx-auto">
          <div className="md:bg-[#ECCDB4] md:rounded-full w-[500px] h-[500px] absolute ml-10"></div>
          <div className="hidden md:pt-0 md:absolute md:-mt-4 md:block">
            <Image src={heroImage} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
