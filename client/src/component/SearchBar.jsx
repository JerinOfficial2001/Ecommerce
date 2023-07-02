import React from "react";
import {IoSearchOutline} from "react-icons/io5"

export default function SearchBar() {
  return (
    <div className="bg-[#f0f5ff] gap-3 w-[100%] h-[100%] rounded-lg flex  items-center pl-3">
      <div className="text-[25px] text-[#7f8187]">
        <IoSearchOutline />
      </div>
      <input
        type="text"
        placeholder="Search for Products, Brands and More"
        className="w-[94%] h-[100%] bg-[#f0f5ff] placeholder-[#7f8187] placeholder:font-semibold outline-none"
      />
    </div>
  );
}
