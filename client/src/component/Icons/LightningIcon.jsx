import { classNames } from "@/src/utils/Classname";
import React from "react";
import { BsLightningFill } from "react-icons/bs";

export default function LightningIcon({ customClass }) {
  return <BsLightningFill className={classNames(customClass)} />;
}
