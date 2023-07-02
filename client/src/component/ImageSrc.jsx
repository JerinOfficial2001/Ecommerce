import Image from "next/image";
import React from "react";
import { classNames } from "../utils/Classname";

export default function ImageSrc({ customClass, src }) {
  return (
    <>
      <Image  alt="loading" src={src} className={classNames(customClass)} />
    </>
  );
}
