import React from "react";
import TopBar from "../component/TopBar";

export default function Layout({ children, navColor }) {
  return (
    <div className=" w-[100%] flex flex-col items-center gap-4 bg-[#f1f2f4] relative">
      <TopBar navColor={navColor} />
      <div className=" w-[100%] flex flex-col items-center gap-2">
        {children}
      </div>
    </div>
  );
}
