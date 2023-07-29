import React, { useState } from "react";
import TopBar from "../component/TopBar";
import { Toaster } from "react-hot-toast";
import Loaders from "../component/Loaders";
import { classNames } from "../utils/Classname";
import { useSelector } from "react-redux";

export default function Layout({
  children,
  navColor,
  hoverIt,
  sethoverIt,
  customClass,
  customChild,
  cartBtnHide,
}) {
  const items = useSelector((state) => state.products.items);
  // const windows =
  //   typeof window !== "undefined" && window.localStorage.getItem("userData");
  // const userData = JSON.parse(windows);
  return (
    <div
      className={classNames(
        customClass ? customClass : "gap-4",
        " w-[100%] flex flex-col items-center  relative"
      )}
    >
      <TopBar
        navColor={navColor}
        hoverIt={hoverIt}
        sethoverIt={sethoverIt}
        searchItems={items}
        cartBtnHide={cartBtnHide}
      />

      <div
        className={classNames(
          customChild ? customChild : "gap-2",
          " w-[100%] flex flex-col items-center  "
        )}
      >
        <Toaster position="top-center" />
        {children}
      </div>
    </div>
  );
}
