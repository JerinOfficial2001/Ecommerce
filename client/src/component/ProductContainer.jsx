import React, { useState } from "react";
import Text from "./Text";
import CircleRightArrowIcon from "./CircleRightArrowIcon";

export default function ProductContainer({ children, divertor, name }) {
  return (
    <>
      {divertor ? (
        <div className="h-[260px] w-[98%] flex items-center justify-center rounded-md  cursor-pointer  bg-white">
          {children}
        </div>
      ) : (
        <>
          <div className=" w-[98%] flex flex-col items-center justify-center bg-white rounded-md p-2 cursor-pointer ">
            <div className=" w-[100%] h-[65px] flex justify-between items-center  gap-2  p-2 ">
              <Text name={name} customClass={"font-semibold text-[23px]"} />
              <CircleRightArrowIcon customClass={"text-[blue] text-[30px]"} />
            </div>
            <div className=" w-[100%] flex items-center  gap-3 bg-white rounded-md p-2 pl-8">
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
}
