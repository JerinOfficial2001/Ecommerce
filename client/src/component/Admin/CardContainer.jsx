import React from "react";
import Text from "../Text";
import SearchBar from "../SearchBar";
import { classNames } from "@/src/utils/Classname";
import LeftGo from "../Icons/LeftGo";

export default function CardContainer({
  children,
  name,
  Searchbar,
  MainDivStyle,
  searchItems,
  arrowOnclick,
  closeArrow,
}) {
  return (
    <div className=" h-[100%] w-[50%] flex-col flex items-center gap-8 p-6 rounded-md bg-[#0000001a] ">
      <div className="w-[100%] relative flex items-center justify-center h-[70px]">
        {"true" === closeArrow && <LeftGo onClick={arrowOnclick} />}
        <Text name={name} customClass={"text-lg font-bold"} />
      </div>
      {"true" === Searchbar && (
        <div className="w-[100%] h-[55px] relative">
          <SearchBar
            searchItems={searchItems}
            customClass={"left-2"}
            customWidth={"w-[100%] top-[52px]"}
          />
        </div>
      )}
      <div
        className={classNames(
          MainDivStyle,
          "container-snap overflow-y-scroll h-[100%] w-[100%] "
        )}
      >
        {children}
      </div>
    </div>
  );
}
