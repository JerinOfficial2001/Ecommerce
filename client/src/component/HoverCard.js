import React from "react";
import { classNames } from "../utils/Classname";

export default function HoverCard({ children, customClass, close }) {
  return (
    <div
      onMouseLeave={close}
      
      onLostPointerCapture={close}
      className={classNames(
        customClass ? customClass : " h-[300px] w-[200px] ",
        "rounded-md bg-white absolute z-10 cursor-pointer"
      )}
      style={{
        boxShadow: "0px 0px 3px gray",
      }}
    >
      {children}
    </div>
  );
}
