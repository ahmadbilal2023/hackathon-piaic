"use client";

import { useState } from "react";

const Quantity = () => {
  const [num, setNum] = useState(1);
  return (
    <div className="center gap-x-3">
      {/* minus */}
      <div
        className="border h-7 w-7 rounded-full cursor-pointer center"
        onClick={() => {
          setNum(num <= 1 ? 1 : num - 1);
        }}
      >
        -
      </div>
      {/* number */}
      <span className="text-sm font-medium">{num}</span>
      {/* plus */}
      <div
        className="border cursor-pointer h-7 w-7 rounded-full center"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +
      </div>
    </div>
  );
};
export default Quantity;
