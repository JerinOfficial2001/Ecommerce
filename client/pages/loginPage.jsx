import Text from "@/src/component/Text";
import Layout from "@/src/layout/Layout";
import { filterNavItems } from "@/src/utils/Filter";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import React from "react";

export default function LoginPage() {
  return (
    <Layout customClass={"gap-0"}>
      <div className="shadow w-[100%] flex  gap-4 items-center justify-center bg-white rounded-md p-2 cursor-pointer">
        {filterNavItems("none")?.map((i) => (
          <div
            key={i._id}
            className="h-[20px]  p-2 flex flex-col items-center justify-center gap-2 hover:text-[blue]"
          >
            <Text name={i.title} customClass={"text-sm font-semibold "} />
          </div>
        ))}
      </div>
      <div className="w-[100%] flex items-center justify-center">
        <div className="w-[55%] h-[500px] bg-white flex items-center shadow">
          <div className="bg-[rgb(40,115,240)] p-[5%] w-[40%] h-[500px] bg-white flex flex-col items-center justify-between">
            <div className="w-[100%] flex flex-col gap-4 ">
              <Text
                name={"Login"}
                customClass={"text-[30px] font-bold text-white"}
              />
              <Text
                name={
                  <p>
                    Get access to your Orders, <br />
                    Wishlist and Recommendations
                  </p>
                }
                customClass={" font-semibold text-white"}
              />
            </div>
            <Image
              className="h-[200px] w-[100%]"
              src={require("../src/assets/flipkart.jpeg")}
              alt=""
            />
          </div>
          <div className="p-[5%] h-[100%] w-[60%] flex flex-col items-center justify-between">
            <div className="w-[100%] flex flex-col gap-4">
              <TextField
                variant="standard"
                label="Enter Email/Mobile number"
                className="mb-4"
              />
              <Text
                name={
                  <p>
                    By continuing, you agree to Flipkart's
                    <span className="text-[rgb(40,115,240)]">
                      {" "}
                      Terms of Use{" "}
                    </span>
                    and
                    <span className="text-[rgb(40,115,240)]">
                      {" "}
                      Privacy Policy{" "}
                    </span>
                    .
                  </p>
                }
                customClass={" text-[gray] text-xs"}
              />
              <button className="p-3 w-[100%] text-white bg-[#f62]">
                Login
              </button>
            </div>

            <Text
              name={"New to Flipkart? Create an account"}
              customClass={"text-md text-[rgb(40,115,240)]"}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
