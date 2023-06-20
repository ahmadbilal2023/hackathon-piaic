import Image from "next/image";
import Logo from "/public/Logo.webp";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { InputWithButton } from "@/view/input";
import { MenubarDemo } from "../menuBar";

const Header = () => {
  return (
    <div className="md:flex flex justify-between md:items-center md:sticky md:top-0 md:z-[100] md:bg-green-200 md:px-4 py-4">
      <Link href={"/"}>
        <Image src={Logo} alt={"logo"} className="w-44" />
      </Link>
      <div className="md:flex hidden md:gap-x-10">
        <div className="text-lg">
          <Link href={"/category/Female"}> Female </Link>
        </div>
        <div className="text-lg">
          <Link href={"/category/Male"}> Male </Link>
        </div>
        <div className="text-lg">
          <Link href={"/category/Kids"}> Kids </Link>
        </div>
        <div className="text-lg">
          <Link href={"/category/Sports"}> Sports </Link>
        </div>
        <div className="text-lg">
          <Link href={"/products"}> All Products </Link>
        </div>
      </div>
      <div className="md:flex hidden">
        <InputWithButton />
      </div>
      <div className="md:h-10 md:w-10 md:rounded-full hidden md:bg-gray-300 md:flex md:justify-center md:items-center">
        <ShoppingCart className="md:h-6 md:w-6" />
      </div>
      <div className="md:hidden flex justify-end">
        <MenubarDemo />
      </div>
    </div>
  );
};

export default Header;
