import React, { useState } from "react";
import TopBar from "../component/TopBar";
import { Toaster } from "react-hot-toast";
import Loaders from "../component/Loaders";
import { classNames } from "../utils/Classname";

export default function Layout({
  children,
  navColor,
  CartOnclick,
  hoverIt,
  sethoverIt,
  customClass,
  uname,
  searchItems,
}) {
  const [loading, setloading] = useState("");
  return (
    <div
      className={classNames(
        customClass ? customClass : "gap-4",
        " w-[100%] flex flex-col items-center  relative"
      )}
    >
      {"true" === loading ? <Loaders loader={loading} /> : null}
      <TopBar
        loading={loading}
        setloading={setloading}
        navColor={navColor}
        CartOnclick={CartOnclick}
        hoverIt={hoverIt}
        sethoverIt={sethoverIt}
        uname={uname}
        searchItems={searchItems}
      />

      <div className=" w-[100%] flex flex-col items-center gap-2 ">
        <Toaster position="top-center" />
        {children}
      </div>
    </div>
  );
}
