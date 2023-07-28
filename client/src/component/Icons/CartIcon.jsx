import { PiShoppingCartFill } from "react-icons/pi";
import React from "react";
import { classNames } from "@/src/utils/Classname";

export default function CartIcon({ customClass }) {
  return <PiShoppingCartFill className={classNames(customClass)} />;
}
