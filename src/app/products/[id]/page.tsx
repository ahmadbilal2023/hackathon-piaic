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
    <div className="flex flex-col md:flex-row justify-center mt-16 py-10 flex-wrap">
      {result.map((product) => (
        <div key={product.id} className="flex justify-between gap-6">
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
              <h1 className="text-4xl font-semibold">{product.name}</h1>
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
                    <div className="h-6 w-6 mt-3 rounded-full cursor-pointer hover:shadow-2xl border center">
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
            <div className="mt-8 flex items-center gap-x-6">
              <Button className="bg-black text-base h-6 px-4 py-5 rounded-none font-bold md:text-lg">
                <ShoppingCart className="mr-3" /> Add to Cart
              </Button>
              <p className="text-2xl font-bold">${product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
