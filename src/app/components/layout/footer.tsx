import React from "react";
import logoFooter from "/public/footerlogo.png";
import Image from "next/image";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="md:flex md:justify-between flex-col md:flex-row md:px-10 items-center py-10 mt-10">
        <div className="space-y-5">
          <div>
            <Image
              src={logoFooter}
              alt="footerlogo"
              className="h-[130px] w-[150px]"
            />
          </div>
          <div className="md:w-[300px] w-[200px] font-bold text-sm md:text-base">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </div>
          <div className="flex gap-3">
            <div>
              <AiOutlineTwitter className="text-2xl" />
            </div>
            <div>
              <AiFillFacebook className="text-2xl" />
            </div>
            <div>
              <AiFillLinkedin className="text-2xl" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 items-start md:space-y-0 md:space-x-20 mt-8">
          <div>
            <h1 className="text-xl font-extrabold">Company</h1>
            <ul className="md:space-y-4 mt-5 font-medium">
              <li>About</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>How it Works</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-extrabold">Support</h1>
            <ul className="md:space-y-4 mt-5 font-medium">
              <li>Support Career</li>
              <li>24/7 Service</li>
              <li>Quick Chat</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-extrabold">Contact</h1>
            <ul className="md:space-y-4 mt-5 font-medium">
              <li>Whatsapp</li>
              <li>24/7 Chat</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-12">
        <div className="h-1 w-full bg-gray-300"></div>
      </div>
      <div className="flex justify-between mb-16 flex-col space-y-3 md:space-y-0 md:flex-row text-sm md:text-xl">
        <div>
          <p className="text-xl font-bold"> Copyright © 2022</p> Dine Market
        </div>
        <div><p className="text-xl font-bold">Design by.</p> Weird Design Studio</div>
        <div><p className="text-xl font-bold">Code by.</p> shabrina12 on github</div>
      </div>
    </>
  );
};

export default Footer;
