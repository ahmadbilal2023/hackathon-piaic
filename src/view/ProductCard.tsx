import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const ProductCard = (props: {
  title: string;
  price: number;
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
      </div>
    </Link>
  );
};

export default ProductCard;
