import React from "react";
import event1 from "../../public/event1.webp";
import Image from "next/image";
import event2 from "../../public/event2.webp";
import event3 from "../../public/event3.webp";

const Promotion = () => {
  return (
    <div className="md:mt-28 mt-16 ">
      {/* promotion heading*/}
      <div className="flex justify-center items-center">
        <h5 className="text-xs font-extrabold text-blue-500 tracking-widest">
          PROMOTIONS
        </h5>
      </div>
      <div className="flex justify-center md:mt-3">
        <h1 className="text-xl text-center md:text-3xl font-extrabold tracking-wide">
          Our Promotions Events
        </h1>
      </div>
      <div className="md:flex md:flex-row flex-col justify-between items-center gap-3 md:mt-5 mt-2">
        {/* female promotion part */}
        <div className="grid grid-rows-2 gap-3">
          <div className="flex justify-between md:w-[650px] md:h-[178px] bg-zinc-300">
            <div className="ml-8 my-auto">
              <h1 className="text-sm md:text-2xl font-extrabold">
                GET UP TO <span className="text-lg md:text-3xl">60%</span>
              </h1>
              <p className="text-xs md:text-base">For the summer season</p>
            </div>
            <Image
              src={event1}
              alt="promotion"
              height={280}
              width={220}
              className="mr-6"
            />
          </div>
          <div className="bg-black flex justify-center items-center">
            <div className="text-white">
              <div className="text-xl md:text-3xl font-extrabold text-center tracking-widest">
                GET 30% Off
              </div>
              <div className="text-xs text-center mt-1 md:mt-3">
                USE PROMO CODE
              </div>
              <div className="px-8 py-1 rounded-md tracking-widest text-lg font-bold bg-stone-600 ">
                DINEWEEKANDSALE
              </div>
            </div>
          </div>
        </div>
        {/* male promotion part 1 */}
        <div className="bg-orange-200">
          <div>
            <div className="mt-4 ml-3">
              <div className="text-sm">Flex Sweatshirt</div>
              <div className="flex space-x-1">
                <h5 className="line-through">$100.00</h5>
                <span className="text-lg font-bold">$75.00</span>
              </div>
            </div>
            <div>
              <Image src={event2} alt="male promotion" />
            </div>
          </div>
        </div>
        {/* male promotion part 2 */}
        <div className="bg-zinc-300">
          <div>
            <div className="mt-4 ml-3">
              <div className="text-sm">Flex Push Button Bomber</div>
              <div className="flex space-x-1">
                <h5 className="line-through">$100.00</h5>
                <span className="text-lg font-bold">$75.00</span>
              </div>
            </div>
            <div>
              <Image src={event3} alt="male promotion" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
