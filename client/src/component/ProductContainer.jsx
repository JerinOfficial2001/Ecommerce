import React, { useState } from "react";
import Text from "./Text";
import CircleRightArrowIcon from "./CircleRightArrowIcon";
import { useRouter } from "next/router";

export default function ProductContainer({
  children,
  divertor,
  name,
  disabledLeft,
  disabledRight,
  onClickLeft,
  onClickRight,
  onClick,
}) {
  const router = useRouter();
  return (
    <>
      {divertor ? (
        <div className="h-[260px] w-[98%] flex items-center justify-center rounded-md  cursor-pointer  bg-white relative">
          <button
            onClick={onClickLeft}
            disabled={disabledLeft}
            className="h-[90px] w-[40px] p-2 rounded-sm bg-white absolute left-1 top-[32%] flex items-center justify-center"
            style={{ boxShadow: "0px 0px 3px gray" }}
          >
            {"<"}
          </button>
          <button
            onClick={onClickRight}
            disabled={disabledRight}
            className="h-[90px] w-[40px] p-2 rounded-sm bg-white absolute right-1 top-[32%] flex items-center justify-center"
            style={{ boxShadow: "0px 0px 3px gray" }}
          >
            {">"}
          </button>
          {children}
        </div>
      ) : (
        <>
          <div className=" w-[98%] flex flex-col items-center justify-center bg-white rounded-md p-2 cursor-pointer relative">
            {/* <button
              onClick={onClickBtnLeft}
              disabled={disabledBtnLeft}
              className="h-[90px] w-[40px] p-2 rounded-sm bg-white absolute left-1 top-[45%] flex items-center justify-center"
              style={{ boxShadow: "0px 0px 3px gray" }}
            >
              {"<"}
            </button> */}
            {/* <button
              disabled={disabledBtnRight}
              onClick={onClickBtnRight}
              className="h-[90px] w-[40px] p-2 rounded-sm bg-white absolute right-1 top-[45%] flex items-center justify-center"
              style={{ boxShadow: "0px 0px 3px gray" }}
            >
              {">"}
            </button> */}
            <div className=" w-[100%] h-[65px] flex justify-between items-center  gap-2  p-2 ">
              <Text name={name} customClass={"font-semibold text-[23px]"} />
              <CircleRightArrowIcon
                customClass={"text-[blue] text-[30px]"}
                onclick={onClick}
              />
            </div>
            <div className=" w-[100%] flex items-center justify-center bg-white p-2 ">
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
}
