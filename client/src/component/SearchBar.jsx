import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className="bg-[#f0f5ff] gap-3 w-[100%] h-[100%] rounded-lg flex  items-center">
      <input
        type="text"
        placeholder="Search for Products, Brands and More"
        style={{
          width: "100%",
          border: "none",
          outline: "none",
          height: "100%",
          backgroundColor: "#f0f5ff",
          position: "relative",
          paddingLeft: "35px",
          borderRadius: "10px",
          color: "black",
        }}
      />
      <div className="left-[13%] text-[25px] text-[#7f8187] absolute">
        <IoSearchOutline />
      </div>
    </div>
  );
}
