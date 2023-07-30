import { PiShoppingCartFill } from "react-icons/pi";
import React from "react";
import { classNames } from "@/src/utils/Classname";
import Text from "../Text";

export default function CartIcon({ customClass }) {
  const windows =
    typeof window !== "undefined" && window.localStorage.getItem("cartLength");
  const cartLength = JSON.parse(windows);

  return (
    <div className="relative">
      {cartLength > 0 && (
        <div className="bg-[red] h-[12px] w-[12px] bottom-4  flex items-center justify-center p-2 absolute rounded-full right-0">
          <Text
            name={cartLength}
            customClass={"text-[10px] font-bold text-[white]"}
          />
        </div>
      )}

      <PiShoppingCartFill className={classNames(customClass)} />
    </div>
  );
}
