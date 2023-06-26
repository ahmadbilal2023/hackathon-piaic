import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { ShoppingCart } from "lucide-react";

const ProductCard = (props: {
  title: string;
  price: string;
  img: StaticImageData;
  category: string;
  id: number;
}) => {
  return (
    <Link href={`/products/${props.id}`}>
      <div className="py-5">
        <Image src={props.img} alt="product 1" width={380} height={400} />
        <div className="font-bold my-3">
          <h3>{props.title}</h3>
          <p>${props.price}</p>
          <p>
            Category{" "}
            <span className="text-base font-normal">{props.category}</span>
          </p>
        </div>
        <div>
          <Button className="bg-black text-base h-6 px-4 py-5 rounded-none font-bold md:text-lg">
            <ShoppingCart className="mr-3" /> Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
