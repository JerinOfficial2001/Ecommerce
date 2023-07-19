import React, { useContext, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { MyContext } from "../context/MyContext";

export default function SearchBar() {
  const [loading, setloading] = useState("");

  const items = useSelector((state) => state.products.items);
  const [searchInput, setsearchInput] = useState("");
  return (
    <div className=" bg-[#f0f5ff] gap-3 w-[100%] h-[100%] rounded-lg flex  items-center">
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
          setsearchInput(e.target.value);
        }}
      />
      <div className="left-[13%] text-[25px] text-[#7f8187] absolute">
        <IoSearchOutline />
      </div>
      {"open" === loading ? (
        <div
         
          className="p-2 bg-white shadow rounded-md max-h-[300px] w-[48%] overflow-y-scroll top-[90%] absolute flex-col flex items-center  gap-2"
        >
          {items
            .filter((val) => {
              if (searchInput == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return val;
              }
            })
            .map((i) => (
              <p
                onClick={() => {
                  setsearchInput(i.title);
                  setloading("");
                }}
                className="text-black cursor-pointer w-[100%] hover:bg-[#0000005b] rounded-md p-1"
              >
                {i.title}
              </p>
            ))}
        </div>
      ) : null}
    </div>
  );
}
