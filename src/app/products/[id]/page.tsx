import Quantity from "@/app/components/Quantity";
import { products } from "@/lib/mock";
import { StaticImageData } from "next/image";
import Image from "next/image";

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
            <Image src={product.image} alt={product.name} width={500} height={500} />
          </div>
          {/* right content */}
          <div>
            <div>
              <h1 className="text-4xl">{product.name}</h1>
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
                  <Quantity/>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
