import { products } from "@/lib/mock";
import ProductCard from "@/view/ProductCard";
import { StaticImageData } from "next/image";

const getProductByCategory = (category: string) => {
  return products.filter((product) => product.category === category);
};

export default function Page({ params }: { params: { slug: string } }) {
  const result = getProductByCategory(params.slug);
  return (
    <div className="flex justify-around flex-wrap md:mt-34 mt-8 py-6">
      {result.length > 0 ? (
        result.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            img={product.image as StaticImageData}
            category={product.category}
            id={product.id}
          />
        ))
      ) : (
        <p className="text-6xl font-bold">No category found</p>
      )}
    </div>
  );
}
