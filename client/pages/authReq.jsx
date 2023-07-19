import Loaders from "@/src/component/Loaders";
import Text from "@/src/component/Text";
import { MyContext } from "@/src/context/MyContext";
import Layout from "@/src/layout/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

export default function AuthReq() {
  const router = useRouter();
  const { loading, setloading } = useContext(MyContext);
  return (
    <Layout hoverIt={"showBtn"}>
      <Loaders loader={loading} />
      <div className=" w-[100%]  flex pb-[11%] justify-center">
        <div className="rounded-md shadow-2 bg-white h-[500px] w-[80%] flex-col flex items-center justify-evenly">
          <Image
            className="h-[180px] w-[250px]"
            alt="loading"
            src={require("../src/assets/needSignUp.png")}
          />
          <Text
            name={"Missing Cart items?"}
            customClass={"text-lg font-semibold"}
          />
          <Text
            name={"Login to see the items you added previously"}
            customClass={"text-sm "}
          />
          <button
            onClick={() => {
              setloading("true");
              router.push("/loginPage");
              setloading("");
            }}
            className="bg-[#fb641b] p-2 text-white w-[100px] font-semibold"
          >
            Login
          </button>
        </div>
      </div>
    </Layout>
  );
}
