import React, { useContext, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { MyContext } from "../context/MyContext";
import { classNames } from "../utils/Classname";
import SearchFilter from "../utils/SearchFilter";

export default function SearchBar({ customClass, customWidth, searchItems }) {
  const [loading, setloading] = useState("");

  const [searchInput, setsearchInput] = useState("");
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
        onClick={() => {
          setloading("open");
        }}
        value={searchInput}
        onChange={(e) => {
          setloading("open");
          setsearchInput(e.target.value);
        }}
      />
      <div
        className={classNames(
          customClass,
          "text-[25px] text-[#7f8187] absolute"
        )}
      >
        <IoSearchOutline />
      </div>
      {"open" === loading ? (
        <SearchFilter
          searchItems={searchItems}
          setsearchInput={setsearchInput}
          searchInput={searchInput}
          customWidth={customWidth}
          setloading={setloading}
        />
      ) : null}
    </div>
  );
}
