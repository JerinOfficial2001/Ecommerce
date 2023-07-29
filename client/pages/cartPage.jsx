import CartCard from "@/src/component/CartCard";
import Text from "@/src/component/Text";
import Layout from "@/src/layout/Layout";
import { classNames } from "@/src/utils/Classname";
import React, { useState } from "react";

export default function CartPage() {
  const [activeClass, setactiveClass] = useState("/");
  return (
    <Layout cartBtnHide={"true"}>
      <div className=" w-[80%] flex gap-4">
        <div
          className={classNames(
            activeClass === "grocery" ? "w-[100%]" : "w-[67%]",
            " flex-col flex gap-3 shadow-md rounded-md mb-10"
          )}
        >
          <div className="rounded-t-md bg-[white] h-[60px] w-[100%] flex items-center justify-evenly">
            <div className=" h-[60px] w-[77%] flex items-center justify-between">
              <div
                onClick={() => {
                  setactiveClass("/");
                }}
                className={classNames(
                  activeClass === "/"
                    ? "border-[#2a6fed] border-b-[3px] text-[#2a6fed]"
                    : null,
                  "cursor-pointer h-[100%] w-[200px]  flex items-center justify-center"
                )}
              >
                <Text
                  name={"MrJKart"}
                  customClass={"text-md font-semibold hover:text-[#2a6fed]"}
                />
              </div>
              <div
                onClick={() => {
                  setactiveClass("grocery");
                }}
                className={classNames(
                  activeClass === "grocery"
                    ? "border-[#2a6fed] border-b-[3px] text-[#2a6fed]"
                    : null,
                  "cursor-pointer h-[100%] w-[200px]  flex items-center justify-center"
                )}
              >
                <Text
                  name={"Grocery"}
                  customClass={"text-md font-semibold hover:text-[#2a6fed]"}
                />
              </div>
            </div>
          </div>
          {activeClass === "grocery" ? (
            <div className="bg-white h-[370px]  w-[100%] flex justify-center items-center">
              <div className="flex-col flex items-center justify-center gap-2">
                Empty
              </div>
            </div>
          ) : (
            <div className="flex-col flex gap-3 w-[100%]">
              <div className="bg-[white] h-[60px] w-[100%] flex items-center justify-between p-4">
                <Text
                  name={"From Saved Addresses"}
                  customClass={"text-sm hover:text-[#2a6fed]"}
                />

                <Text
                  name={"Enter Delivery Pincode"}
                  customClass={
                    "text-sm text-[#2a6fed] border-[1px] rounded-md p-2 hover:shadow-md cursor-pointer"
                  }
                />
              </div>
              <div className="flex-col flex w-[100%] ">
                <CartCard />
               
                <div className="bg-[white] shadow-inner sticky bottom-0 h-[80px] w-[100%] flex items-center justify-end p-6">
                  <button className="flex items-center justify-center gap-2 text-[white] bg-[#fb641b] w-[31%] p-4 font-bold text-md">
                    PLACE ORDER
                  </button>
                </div>
              </div>

              <div className="flex-col flex w-[100%] ">
                <div className="bg-[white] h-[60px] border-b-[1px] w-[100%] flex items-center justify-between p-4">
                  <Text
                    name={"Saved For Later"}
                    customClass={"text-lg font-semibold"}
                  />
                </div>
                <CartCard btnName={"MOVE TO CART"} />
              </div>
            </div>
          )}
        </div>
        {activeClass !== "grocery" && (
          <div className="bg-white rounded-md w-[33%] h-[320px] shadow-md  flex-col flex  sticky top-14">
            <div className="flex items-center p-5 h-[50px] border-b-[1px]">
              <Text
                name={"PRICE DETAILS"}
                customClass={"text-md text-[gray] font-semibold"}
              />
            </div>

            <div className="w-[100%] h-[280px] flex-col flex gap-5 p-5">
              <div className="w-[100%] flex items-center justify-between">
                <Text name={"Price"} customClass={"text-md font-semibold"} />
                <Text name={"₹ 30,000"} customClass={"text-md font-semibold"} />
              </div>
              <div className="w-[100%] flex items-center justify-between">
                <Text name={"Discount"} customClass={"text-md font-semibold"} />
                <Text
                  name={"-₹ 19,800"}
                  customClass={"text-[#4a984e] text-md font-semibold"}
                />
              </div>
              <div className="w-[100%] flex items-center justify-between">
                <Text
                  name={"Delivert Charges"}
                  customClass={"text-md font-semibold"}
                />
                <Text
                  name={"Free"}
                  customClass={"text-[#4a984e] text-md font-semibold"}
                />
              </div>
              {/* <img src={productById?.image?.url} alt="loading..." /> */}
              {/* <div className="w-[100%]  flex items-center gap-2">
                <button className="flex items-center justify-center gap-2 text-[white] bg-[#ff9f00] w-[50%] p-4 font-bold text-md">
                  <CartIcon customClass={"text-xl font-bold"} />
                  ADD TO CART
                </button>
                <button className="flex items-center justify-center gap-2 text-[white] bg-[#fb641b] w-[50%] p-4 font-bold text-md">
                  <LightningIcon customClass={"text-lg font-bold"} />
                  BUY NOW
                </button>
              </div> */}
              <div className="w-[100%] h-[70px] border-t-[1px] border-b border-dashed flex items-center justify-between ">
                <Text name={"Total Amount"} customClass={"text-lg font-bold"} />
                <Text name={"₹ 30,000"} customClass={"text-lg font-semibold"} />
              </div>
              <div className="w-[100%] flex items-center justify-between">
                <Text
                  name={"You will save ₹19,000 on this order"}
                  customClass={"text-[#4a984e] text-md font-bold"}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
