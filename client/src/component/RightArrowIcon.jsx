import React from "react";
import { CgChevronRight } from "react-icons/cg";
import { classNames } from "../utils/Classname";

export default function RightArrowIcon({ customClass }) {
  return (
    <div className={classNames(customClass)}>
      <CgChevronRight />
    </div>
  );
}
