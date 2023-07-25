import { classNames } from "@/src/utils/Classname";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function DeleteIcon({ customClass }) {
  return (
    <RiDeleteBin6Line
      className={classNames(
        customClass?customClass:"text-xl",
        "text-[red] cursor-pointer hover:text-[white]"
      )}
    />
  );
}
