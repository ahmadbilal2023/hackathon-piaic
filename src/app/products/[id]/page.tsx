import Quantity from "@/app/components/Quantity";
import { products } from "@/lib/mock";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { Button } from "../../../../components/ui/button";
import { ShoppingCart } from "lucide-react";

const getProductsDetail = (id: number | string) => {
  return products.filter((product) => product.id == id);
};
const sizes = ["XS", "S", "M", "L", "XL"];
export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsDetail(params.id);

  return (
    <main>
      <div className="flex flex-col md:flex-row justify-center mt-16 py-10 flex-wrap">
        {result.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row justify-between gap-6"
          >
            {/* left image */}
            <div>
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
              />
            </div>
            {/* right content */}
            <div className="ml-5 md:space-y-20 md:mt-10">
              <div>
                <h1 className="md:text-4xl text-lg font-semibold">
                  {product.name}
                </h1>
                <h2 className="text-base text-gray-400 font-semibold">
                  {product.tagline}
                </h2>
              </div>
              <div>
                <h3 className="font-semibold text-xs mt-6">SELECT SIZE</h3>
                {/* sizes */}
                <div className="flex gap-x-4">
                  {sizes.map((items) => {
                    return (
                      <div
                        key={1}
                        className="h-6 w-6 mt-3 rounded-full cursor-pointer hover:shadow-2xl border center"
                      >
                        <span className="text-[12px] font-semibold text-center">
                          {items}
                        </span>
                      </div>
                    );
                  })}
                </div>
                {/* Quantity */}
                <div className="flex gap-x-3 mt-6 items-center">
                  <h3 className="text-[12px] font-semibold">Quantity:</h3>
                  <div>
                    <Quantity />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col md:flex-row md:items-center gap-x-6">
                <Button className="bg-black text-xs h-6 px-4 py-5 rounded-none font-bold md:text-lg">
                  <ShoppingCart className="mr-3" /> Add to Cart
                </Button>
                <p className="md:text-2xl text-xl mt-2 md:mt-0 font-bold">
                  ${product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Product Overview section */}
      <div className=" shadow-xl md:mt-10 mt-5 lg:px-16 px-10 md:pt-16 pt-10 pb-10 w-full h-auto">
        <div className="flex justify-start items-center ">
          <h4 className="absolute text-4xl lg:text-7xl text-gray-400/20 font-extrabold">
            Overview
          </h4>
          <h4 className="relative font-bold text-md md:text-xl lg:text-2xl">
            Product Information
          </h4>
        </div>
        <div
          className="h-0.5 w-[250px] lg:w-[1000px] bg-black/20 md:mt-16 mt-5
         mx-auto"
        ></div>
        <div className="md:mt-10 mt-2 flex flex-col lg:flex-row justify-between">
          <h5 className="text-md font-bold text-gray-400">PRODUCT DETAIL</h5>
          <p className="lg:w-7/12 mt-3 lg:mt-0 text-xs lg:text-base text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="md:mt-10 mt-2 flex flex-col lg:flex-row justify-between">
          <h3 className="text-md font-bold text-gray-400">PRODUCT CARE</h3>
          <div className="lg:w-7/12">
            <ul className="list-disc text-xs lg:text-base ml-3">
              <li>Hand wash using cold water.</li>
              <li>Do not using bleach.</li>
              <li>Hang it to dry.</li>
              <li>Iron on low temperature.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
