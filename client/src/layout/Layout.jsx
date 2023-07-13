import React from "react";
import TopBar from "../component/TopBar";
import { Toaster } from "react-hot-toast";
import Loaders from "../component/Loaders";
import { classNames } from "../utils/Classname";

export default function Layout({
  children,
  navColor,
  loading,
  CartOnclick,
  hoverIt,
  sethoverIt,
  customClass,
}) {
  return (
    <div
      className={classNames(
        customClass ? customClass : "gap-4",
        " w-[100%] flex flex-col items-center  relative"
      )}
    >
      <Loaders loader={loading} />
      <TopBar
        navColor={navColor}
        CartOnclick={CartOnclick}
        hoverIt={hoverIt}
        sethoverIt={sethoverIt}
      />
      <div className=" w-[100%] flex flex-col items-center gap-2 ">
        <Toaster position="top-center" />
        {children}
      </div>
    </div>
  );
}
