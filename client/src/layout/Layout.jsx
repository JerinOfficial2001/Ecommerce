import React, { useState } from "react";
import TopBar from "../component/TopBar";
import { Toaster } from "react-hot-toast";
import Loaders from "../component/Loaders";
import { classNames } from "../utils/Classname";
import { filterNavItems } from "../utils/Filter";
import Text from "../component/Text";

export default function Layout({
  children,
  navColor,
  CartOnclick,
  hoverIt,
  sethoverIt,
  customClass,
}) {
  const [loading, setloading] = useState(false);

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
        setloading={setloading}
      />
      
      <div className=" w-[100%] flex flex-col items-center gap-2 ">
        <Toaster position="top-center" />
        {children}
      </div>
    </div>
  );
}
