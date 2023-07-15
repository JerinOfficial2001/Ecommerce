import React from "react";
import { filterNavItems } from "../utils/Filter";
import Text from "./Text";

export default function NavList() {
  return (
    <>
      <div className=" w-[98%] flex  gap-4 items-center justify-center bg-white rounded-md p-2 cursor-pointer">
        {filterNavItems("none")?.map((i) => (
          <div
            key={i._id}
            className="h-[120px]  p-2 flex flex-col items-center justify-center gap-2 hover:text-[blue]"
          >
            <div>
              <img className="h-[100%] w-[100%]" src={i.image.url} />
            </div>
            <Text name={i.title} customClass={"text-md font-semibold "} />
          </div>
        ))}
      </div>
    </>
  );
}
