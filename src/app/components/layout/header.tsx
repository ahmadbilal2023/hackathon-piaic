import Image from "next/image";
import Logo from "/public/Logo.webp";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <div className="md:flex flex justify-between md:items-center py-6">
      <Image src={Logo} alt={"logo"} className="w-44" />
      <div className="md:flex hidden md:gap-x-10">
        <div className="text-lg">
          <Link href={"/"}> Female </Link>
        </div>
        <div className="text-lg">
          <Link href={"/"}> Male </Link>
        </div>
        <div className="text-lg">
          <Link href={"/"}> Kids </Link>
        </div>
        <div className="text-lg">
          <Link href={"/"}> All Products </Link>
        </div>
      </div>

      <div className="md:h-10 md:w-10 md:rounded-full hidden md:bg-gray-300 md:flex md:justify-center md:items-center">
        <ShoppingCart className="md:h-6 md:w-6" />
      </div>
    </div>
  );
};

export default Header;
