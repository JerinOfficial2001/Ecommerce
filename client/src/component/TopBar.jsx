import React, { useState } from "react";
import { classNames } from "../utils/Classname";
import SearchBar from "../component/SearchBar";
import Text from "../component/Text";
import { PiDotsThreeVertical } from "react-icons/pi";
import { PiUserBold } from "react-icons/pi";
import { CiShop } from "react-icons/ci";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useRouter } from "next/router";
import HoverCard from "./HoverCard";
import { TiPlusOutline } from "react-icons/ti";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoMdGift } from "react-icons/io";
import { BiPackage } from "react-icons/bi";
import LoginModal from "./LoginModal";
import { TbGiftCard } from "react-icons/tb";
import { RiLogoutBoxLine } from "react-icons/ri";
import CartIcon from "./Icons/CartIcon";

export default function TopBar({
  cartBtnHide,
  navColor,
  hoverIt,
  searchItems,
}) {
  const [btnEffect, setbtnEffect] = useState("");
  const router = useRouter();
  const [login, setlogin] = useState(false);

  const windows =
    typeof window !== "undefined" && window.localStorage.getItem("userData");
  const userData = JSON.parse(windows);

  const signIN_Options = [
    {
      id: 0,
      title: "My Profile",
      icon: <PiUserBold />,
      to: null,
    },
    {
      id: 1,
      title: "MrJkart Plus Zone",
      icon: <TiPlusOutline />,
      to: null,
    },
    {
      id: 2,
      title: "Orders",
      icon: <BiPackage />,
      to: null,
    },
    {
      id: 3,
      title: "Wishlist",
      icon: <MdOutlineFavoriteBorder />,
      to: null,
    },
    {
      id: 4,
      title: "Rewards",
      icon: <IoMdGift />,
      to: null,
    },
    {
      id: 5,
      title: "Gift Cards",
      icon: <TbGiftCard />,
      to: null,
    },
  ];

  return (
    <div
      className={classNames(
        navColor ? navColor : "bg-[#2874f0] text-white",
        "h-[60px] w-[100%] flex items-center justify-between gap-2 pl-16 pr-9 p-2 sticky top-0 z-10"
      )}
    >
      <div className="flex items-center gap-[50px]">
        <div
          className="flex flex-col cursor-pointer"
          onClick={() => {
            router.push("/");
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
          <SearchBar
            customClass={"left-[13%] "}
            customWidth={"w-[47%]"}
            searchItems={searchItems}
          />
        </div>
      </div>
      <div className="flex items-center justify-between h-[100%] w-[490px] relative">
        {"showBtn" === hoverIt ? (
          <button
            onClick={() => {
              setlogin(true);
            }}
            className="bg-white text-[blue] p-1 w-[100px] font-semibold"
          >
            Login
          </button>
        ) : (
          <>
            {cartBtnHide === "true" ? null : (
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => {
                  router.push("/authReq");
                }}
              >
                <div className="text-[25px]">
                  <CiShop />
                </div>
                <Text
                  name={"Become a Seller"}
                  customClass={"text-md font-semibold "}
                />
              </div>
            )}

            <div
              className={classNames(
                btnEffect ? "bg-[#1c41d6] text-white" : null,
                "p-2 flex items-center gap-2 cursor-pointer  rounded-lg  "
              )}
              onMouseEnter={() => {
                setbtnEffect("SignIn");
              }}
              onClick={() => {
                userData ? null : setlogin(true);
              }}
            >
              <div className="text-[25px]">
                <PiUserBold />
              </div>
              <p className={"text-md font-semibold hover:text-white"}>
                {userData ? userData?.uname : "Sign in"}
              </p>

              <div className="text-[20px]">
                {"SignIn" === btnEffect ? <BiChevronUp /> : <BiChevronDown />}
              </div>
            </div>

            {"SignIn" === btnEffect ? (
              <HoverCard
                close={() => {
                  setbtnEffect("");
                }}
                customClass={
                  " w-[280px] top-12  flex flex-col items-center text-black pb-2"
                }
              >
                <div className="p-2 h-[50px] w-[100%] border-b-[1px]  border-b-[lavender] flex items-center justify-between">
                  <Text name={"New Customer?"} customClass={"font-semibold "} />
                  <Text
                    onclick={() => {
                      userData
                        ? null
                        : router.push({
                            pathname: "/loginPage",
                            query: {
                              data: "signUp",
                            },
                          });
                    }}
                    name={userData ? userData?.uname : "Sign Up"}
                    customClass={"font-semibold text-[#1c41d6] text-lg"}
                  />
                </div>
                <div className="h-[83%]  w-[100%] flex flex-col gap-2 justify-between">
                  {signIN_Options.map((i) => (
                    <div
                      key={i?.id}
                      className="p-[6px] pl-4 flex items-center gap-2 hover:bg-[#f1f2f4]"
                    >
                      <div>{i?.icon}</div>
                      <Text
                        name={i?.title}
                        customClass={"text-md font-[14px] "}
                      />
                    </div>
                  ))}
                  {userData ? (
                    <div
                      onClick={() => {
                        window.localStorage.clear();
                        window.location.href = "/";
                      }}
                      className="p-[6px] pl-4 flex items-center gap-2 hover:bg-[#f1f2f4]"
                    >
                      <RiLogoutBoxLine />
                      <Text
                        name={"Logout"}
                        customClass={"text-md font-[14px] "}
                      />
                    </div>
                  ) : null}
                </div>
              </HoverCard>
            ) : null}
            {cartBtnHide === "true" ? null : (
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={
                  userData
                    ? () => {
                        router.push("/cartPage", null, { shallow: true });
                      }
                    : () => {
                        router.push("/authReq");
                      }
                }
              >
                <div className="text-[25px]">
                  <CartIcon />
                </div>
                <Text name={"Cart"} customClass={"text-md font-semibold "} />
              </div>
            )}
            {/* <div className="h-[100%] flex items-center text-[25px] relative">
              <PiDotsThreeVertical
                onClick={() => {
                  setbtnEffect("vertBtn");
                }}
              />
            </div> */}
          </>
        )}
      </div>
      <LoginModal
        open={login}
        close={() => {
          setlogin(false);
        }}
      />
    </div>
  );
}
