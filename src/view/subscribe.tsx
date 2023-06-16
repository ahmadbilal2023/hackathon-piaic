import React from "react";

import { InputWithButton2 } from "./input2";

const Subscribe = () => {
  return (
    <main className="h-full w-full flex justify-center items-center px-10 py-10 mt-10 md:mt-0 ">
      <div className="md:text-9xl text-4xl font-bold text-gray-300/25 mb-[70px] md:mb-0 md:text-gray-300/20 relative">Newsletter</div>
      <div className="md:space-y-5 space-y-2 text-center absolute">
        <div className="md:text-4xl text-2xl font-bold">Subscribe Our Newsletter</div>
        <div className="md:text-md text-sm text-gray-600">Get the latest information and promo offers directly</div>
        <div>
          <InputWithButton2 />
        </div>
      </div>
    </main>
  );
};

export default Subscribe;
