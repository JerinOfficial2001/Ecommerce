import React from "react";
import Text from "./Text";

export default function CartCard({saveHandler, deleteHandler,price, description, title, img, btnName }) {
  return (
    <div className="bg-[white] w-[100%] h-[200px] p-4 flex items-center border-b-[1px]">
      <div className=" h-[100%] w-[140px] p-2">
        <img src={img} className="object-contain h-[100%] w-[100%]" alt="" />
      </div>
      <div className="h-[100%] w-[80%] flex-col flex justify-between p-2 ">
        <div>
          <Text
            name={title}
            customClass={"text-md  cursor-pointer hover:text-[#2a6fed]"}
          />
          <Text
            name={description}
            customClass={"text-xs font-semibold  text-[gray]"}
          />
        </div>
        <div className="flex items-center gap-2 ">
          <Text
            name={"₹2000"}
            customClass={"text-xs line-through font-semibold  text-[gray]"}
          />
          <Text name={"₹" + price} customClass={"text-lg font-semibold "} />
        </div>
        <div className="flex items-center justify-between w-[40%]">
          <Text
            name={btnName ? btnName : "SAVE FOR LATER"}
            customClass={"cursor-pointer text-md font-semibold "}
          onclick={saveHandler}
          />
          <Text
            name={"REMOVE"}
            customClass={
              "text-md font-semibold cursor-pointer hover:text-[#2a6fed]"
            }
            onclick={deleteHandler}
          />
        </div>
      </div>
    </div>
  );
}
