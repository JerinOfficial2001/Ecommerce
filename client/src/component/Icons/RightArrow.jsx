import { classNames } from "@/src/utils/Classname";
import React from "react";
import { FcNext } from "react-icons/fc";

export default function RightArrow({ customClass }) {
  return <FcNext className={classNames(customClass)} />;
}
