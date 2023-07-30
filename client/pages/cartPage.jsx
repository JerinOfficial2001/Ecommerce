import CartCard from "@/src/component/CartCard";
import DeleteModal from "@/src/component/DeleteModal";
import Text from "@/src/component/Text";
import {
  editCartType,
  getCartById,
  removeCartItem,
} from "@/src/controller/User";
import Layout from "@/src/layout/Layout";
import { classNames } from "@/src/utils/Classname";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CartPage() {
  // const [priceData, setpriceData] = useState();
  // console.log("DATA", priceData);
  const dispatch = useDispatch();
  const windows =
    typeof window !== "undefined" && window.localStorage.getItem("userData");
  const userData = JSON.parse(windows);
  // console.log("UserData", userData);
  const fetchCartById = async () => {
    await dispatch(getCartById(userData?._id));
  };
  useEffect(() => {
    fetchCartById();
  }, []);
  const cart = useSelector((state) => state.products.cart);
  // console.log("cart", cart);

  const filterCartType = (type) => {
    const filteredData = cart?.filter((i) => i.cartType === type);
    return filteredData;
  };
  const total = filterCartType("addToCart")?.reduce((prev, cur) => {
    return prev + cur.quantity * cur.price;
  }, 0);
  // console.log("TOTAL", total);
  // console.log("FILTER", filterCartType("addToCart"));
  const [activeClass, setactiveClass] = useState("/");

  return (
    <Layout cartBtnHide={"true"}>
      <div className=" w-[80%] flex gap-4">
        <div
          className={classNames(
            activeClass === "grocery" ||
              filterCartType("addToCart")?.length === 0
              ? "w-[100%]"
              : "w-[67%]",
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
                <div className="flex items-center justify-center w-[100%] bg-white h-[200px]">
                  <Image
                    className="object-contain h-[90%] "
                    src={require("../src/assets/basketEmpty.png")}
                    alt="loading"
                  />
                </div>
                <Text
                  name={"Your basket is empty!"}
                  customClass={"font-semibold text-md"}
                />
              </div>
            </div>
          ) : (
            <div className="flex-col flex gap-3 w-[100%]">
              {filterCartType("addToCart")?.length > 0 && (
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
              )}
              <div className="flex-col flex w-[100%] ">
                {filterCartType("addToCart")?.length > 0 ? (
                  <>
                    {filterCartType("addToCart")?.map((i) => {
                      return (
                        <>
                          <CartCard
                          
                            activeClass={activeClass}
                            setactiveClass={setactiveClass}
                            key={i._id}
                            deleteHandler={async () => {
                              await removeCartItem(i._id);

                              await fetchCartById();
                              setactiveClass("!remove");
                            }}
                            saveHandler={async () => {
                              const cartType = "saveForLater";
                              await editCartType(i._id, cartType);
                              await fetchCartById();
                            }}
                            title={i.title}
                            img={i.image.url}
                            price={i.price.toLocaleString()}
                            description={i.category}
                          />
                        </>
                      );
                    })}
                  </>
                ) : (
                  <div className="bg-white h-[370px]  w-[100%] flex justify-center items-center">
                    <div className="flex-col flex items-center justify-center gap-2">
                      <div className="flex items-center justify-center w-[100%] bg-white h-[200px]">
                        <Image
                          className="object-contain h-[90%] "
                          src={require("../src/assets/needSignUp.png")}
                          alt="loading"
                        />
                      </div>
                      <Text
                        name={"Your cart is empty!"}
                        customClass={"font-semibold text-md"}
                      />
                      <button className="p-2 w-[200px] rounded-md shadow-md text-white font-semibold bg-[#2a6fed]">
                        Shop now
                      </button>
                    </div>
                  </div>
                )}
                {filterCartType("addToCart")?.length > 0 && (
                  <div className="bg-[white] shadow-inner sticky bottom-0 h-[80px] w-[100%] flex items-center justify-end p-6">
                    <button
                      className={classNames(
                        filterCartType("addToCart")?.length === 0
                          ? "bg-[gray] text-[#383737]"
                          : "text-[white] bg-[#fb641b]",
                        "flex items-center justify-center gap-2  w-[31%] p-4 font-bold text-md"
                      )}
                    >
                      PLACE ORDER
                    </button>
                  </div>
                )}
              </div>

              {filterCartType("saveForLater")?.length > 0 && (
                <div className="flex-col flex w-[100%] ">
                  <div className="bg-[white] h-[60px] border-b-[1px] w-[100%] flex items-center justify-between p-4">
                    <Text
                      name={"Saved For Later"}
                      customClass={"text-lg font-semibold"}
                    />
                  </div>
                  {filterCartType("saveForLater")?.map((i) => {
                    // console.log("Data", i.title);
                    return (
                      <>
                        <CartCard
                          key={i._id}
                          activeClass={activeClass}
                          setactiveClass={setactiveClass}
                          deleteHandler={async () => {
                            await removeCartItem(i._id);
                            await fetchCartById();
                            setactiveClass("!remove");
                          }}
                          saveHandler={async () => {
                            const cartType = "addToCart";
                            await editCartType(i._id, cartType);
                            await fetchCartById();
                          }}
                          title={i.title}
                          img={i.image.url}
                          price={i.price.toLocaleString()}
                          description={i.category}
                          btnName={"ADD TO CART"}
                        />
                      </>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
        {filterCartType("addToCart")?.length === 0 ||
        activeClass === "grocery" ? null:(
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
                <Text
                  name={"₹ " + total.toLocaleString()}
                  customClass={"text-md font-semibold"}
                />
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

              <div className="w-[100%] h-[70px] border-t-[1px] border-b border-dashed flex items-center justify-between ">
                <Text name={"Total Amount"} customClass={"text-lg font-bold"} />
                <Text
                  name={"₹ " + total.toLocaleString()}
                  customClass={"text-lg font-semibold"}
                />
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
