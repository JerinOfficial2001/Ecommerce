import Image from "next/image";
import React from "react";
import Text from "../Text";
import RightArrow from "../Icons/RightArrow";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";

export default function Card({
  image,
  title,
  text,
  deleteHandler,
  editHandler,
  editBtn,
}) {
  return (
    <div className=" mb-2 w-[100%] h-[92px] bg-[#ada7a765] rounded-lg shadow-md hover:shadow-inner hover:shadow-[#62f7fcc2] p-2 flex items-center gap-2">
      <div className="bg-[#62fc9098] p-1 w-[100px] h-[100%] rounded-md ">
        {image ? (
          <img
            src={image}
            alt="loading..."
            className="bg-[gray] w-[100%] h-[100%] rounded-md"
          />
        ) : (
          <Image
            src={require("../../assets/empty.jpg")}
            alt="loading..."
            className="h-[100%] w-[100%] rounded-md"
          />
        )}
      </div>
      <div className=" flex-col flex justify-center pl-4 gap-2 w-[70%]  p-2 h-[100%]">
        <Text name={title} customClass={"text-lg font-semibold text-black"} />
        <Text name={text} customClass={"text-md  text-[gray]"} />
      </div>
      <div className="flex items-center justify-between p-2  h-[100%] w-[100px]">
        <div className="flex items-center justify-center">
          {"false" === editBtn ? null : <EditIcon onClick={editHandler} />}
        </div>
        <div className="flex items-center justify-center">
          <DeleteIcon onClick={deleteHandler} />
        </div>
        <div className="flex items-center justify-center">
          <RightArrow />
        </div>
      </div>
    </div>
  );
}
