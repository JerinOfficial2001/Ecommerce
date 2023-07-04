import React from "react";
import { classNames } from "../utils/Classname";
import SearchBar from "../component/SearchBar";
import Text from "../component/Text";
import { PiDotsThreeVertical } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import { PiUserBold } from "react-icons/pi";
import { CiShop } from "react-icons/ci";
import { BiChevronDown } from "react-icons/bi";
import { useRouter } from "next/router";

export default function TopBar({ navColor }) {
  const router = useRouter();
  return (
    <div
      className={classNames(
        navColor ? navColor : "bg-[#2874f0]",
        "h-[60px] w-[100%] flex items-center justify-between gap-2 pl-16 pr-9 p-2 sticky top-0"
      )}
    >
      <div className="flex items-center gap-[50px]">
        <div
          className="flex flex-col cursor-pointer"
          onClick={() => {
            router.push("/admin");
          }}
        >
          <Text
            name={"MrJkart"}
            customClass={"text-[#2a55e5] font-bold italic text-xl pl-2"}
          />
          <Text
            name={
              <p>
                Explore <span className="text-[#ffc700]">Plus</span>
              </p>
            }
            customClass={"text-[#aa9e9e] font-semibold italic text-sm "}
          />
        </div>
        <div className="h-[40px] w-[730px]">
          <SearchBar />
        </div>
      </div>
      <div className="flex items-center justify-between h-[100%] w-[490px] ">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="text-[25px]">
            <CiShop />
          </div>
          <Text
            name={"Become a Seller"}
            customClass={"text-md font-semibold "}
          />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="text-[25px]">
            <PiUserBold />
          </div>
          <Text name={"Sign in"} customClass={"text-md font-semibold "} />
          <div className="text-[20px]">
            <BiChevronDown />
          </div>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="text-[25px]">
            <BsCart3 />
          </div>
          <Text name={"Cart"} customClass={"text-md font-semibold "} />
        </div>
        <div className="h-[100%] flex items-center text-[25px] ">
          <PiDotsThreeVertical />
        </div>
      </div>
    </div>
  );
}
