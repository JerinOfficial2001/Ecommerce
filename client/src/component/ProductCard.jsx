import React from "react";
import Text from "./Text";

export default function ProductCard({ img, price, category, onclick }) {
  return (
    <div
      className="h-[250px] w-[200px] p-2 flex flex-col items-center justify-center gap-2 bg-white border-gray border-2 rounded-md"
      onClick={onclick}
    >
      <div className=" w-[90%] h-[80%] flex items-center justify-center scale-[0.8] hover:scale-[0.9] p-2">
        <img loading="lazy" src={img} alt="loading" />
      </div>
      <div className="flex flex-col items-center justify-center w-[100%]">
        <Text name={category} customClass={"text-sm"} />
        <Text name={price} customClass={"text-sm font-bold"} />
      </div>
    </div>
  );
}
