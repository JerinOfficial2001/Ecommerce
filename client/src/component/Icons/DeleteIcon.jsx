import { classNames } from "@/src/utils/Classname";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function DeleteIcon({ customClass, onClick }) {
  return (
    <RiDeleteBin6Line
      onClick={onClick}
      className={classNames(
        customClass ? customClass : "text-xl",
        "text-[red] cursor-pointer hover:text-[white]"
      )}
    />
  );
}
