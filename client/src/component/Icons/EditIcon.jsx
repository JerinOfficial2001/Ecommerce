import { classNames } from "@/src/utils/Classname";
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";

export default function EditIcon({ customClass,onClick }) {
  return (
    <AiOutlineEdit onClick={onClick}
      className={classNames(
        customClass ? customClass : "text-xl",
        "text-[gray] cursor-pointer hover:text-[white]"
      )}
    />
  );
}
