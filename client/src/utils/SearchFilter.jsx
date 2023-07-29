import React from "react";
import { classNames } from "./Classname";

export default function SearchFilter({
  setloading,
  customWidth,
  searchItems,
  setsearchInput,
  searchInput,
}) {
  return (
    <>
      <div
        onMouseLeave={() => {
          setloading("");
        }}
        onLostPointerCapture={() => {
          setloading("");
        }}
        className={classNames(
          customWidth,
          "container-snap p-2 bg-white shadow rounded-md max-h-[290px]  overflow-y-scroll top-[90%] absolute flex-col flex items-center  gap-2"
        )}
      >
        {searchItems
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
    </>
  );
}
