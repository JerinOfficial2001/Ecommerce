import React from "react";
import Text from "../Text";
import SearchBar from "../SearchBar";
import { classNames } from "@/src/utils/Classname";

export default function CardContainer({
  children,
  name,
  Searchbar,
  MainDivStyle,
  searchItems,
}) {
  return (
    <div className=" h-[100%] w-[50%] flex-col flex items-center gap-8 p-6 rounded-md bg-[#0000001a] ">
      <Text name={name} customClass={"text-lg font-bold"} />
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
