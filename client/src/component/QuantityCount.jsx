import React, { useState } from "react";

export default function QuantityCount() {
  const [count, setcount] = useState(1);
  return (
    <div className=" w-[100%]  flex items-center justify-center gap-2">
      <button
        onClick={() => {
          setcount(count - 1);
        }}
        className="bg-gray-200 cursor-pointer rounded-[100%] h-[30px] w-[30px] p-2 flex items-center justify-center   hover:bg-gray-300 "
      >
        -
      </button>
      <input
        min="1"
        max="5"
        step="1"
        type="number"
        className="border rounded py-2 px-4 text-center outline-none text-sm bg-white w-[45px] h-[30px]"
        value={count}
        onChange={(e) => {
          setcount(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setcount(count + 1);
        }}
        className="bg-gray-200 p-2 rounded-[100%] cursor-pointer  h-[30px] w-[30px] flex items-center justify-center  hover:bg-gray-300 "
      >
        +
      </button>
    </div>
  );
}
