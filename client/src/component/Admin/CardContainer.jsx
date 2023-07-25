import React from "react";
import Text from "../Text";

export default function CardContainer({ children, name }) {
  return (
    <div className=" h-[100%] w-[50%] flex-col flex items-center gap-2 p-6 rounded-md bg-[#0000001a] ">
      <Text name={name} customClass={"text-lg font-bold"} />
      <div className="container-snap overflow-y-scroll h-[100%] w-[100%] ">
        {children}
      </div>
    </div>
  );
}
