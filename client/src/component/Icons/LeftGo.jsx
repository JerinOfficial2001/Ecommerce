import { classNames } from "@/src/utils/Classname";
import React from "react";
import { FcLeft } from "react-icons/fc";

export default function LeftGo({ customClass, onClick }) {
  return (
    <>
      <div
        onClick={onClick}
        className={classNames(
          customClass,
          "absolute p-1 px-2 left-2 top-0 bg-white rounded-md border-2  hover:border-black shadow-black"
        )}
      >
        <FcLeft className="text-xl cursor-pointer hover:text-[white]" />
      </div>
    </>
  );
}
