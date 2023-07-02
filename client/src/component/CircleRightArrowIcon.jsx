import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { classNames } from "../utils/Classname";

export default function CircleRightArrowIcon({ customClass }) {
  return (
    <>
      <div className={classNames(customClass)}>
        <IoIosArrowDroprightCircle />
      </div>
    </>
  );
}
