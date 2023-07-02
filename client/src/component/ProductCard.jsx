import React from "react";
import ImageSrc from "./ImageSrc";
import Text from "./Text";

export default function ProductCard({ src, price, category }) {
  return (
    <div className="h-[250px] w-[195px] p-2 flex flex-col items-center justify-center gap-2 bg-white border-gray border-2 rounded-md">
      <div className=" w-[90%] h-[80%]">
        <ImageSrc src={src} customClass={"h-[100%] w-[100%]"} />
      </div>
      <div className="flex flex-col items-center justify-center w-[100%]">
        <Text name={price} customClass={"text-md"} />
        <Text name={category} customClass={"text-sm font-bold" } />
      </div>
    </div>
  );
}
