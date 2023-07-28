import { classNames } from "@/src/utils/Classname";
import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function StartIcon({ customClass }) {
  return <AiFillStar className={classNames(customClass)} />;
}
