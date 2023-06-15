import Image, { StaticImageData } from "next/image";

const ProductCard = (props: {
  title: string;
  price: number;
  img: StaticImageData;
}) => {
  return (
    <div>
      <Image src={props.img} alt="product 1" width={380} height={400} />
      <div className="font-bold my-3">
        <h3>{props.title}</h3>
        <p>${props.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
