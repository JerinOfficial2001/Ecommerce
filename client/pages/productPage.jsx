import Text from "@/src/component/Text";
import Layout from "@/src/layout/Layout";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

export default function ProductPage() {
  const { query } = useRouter();
  console.log("DEFINE", query);
  const { items: data } = useSelector((state) => state.products);
  const filterNavItems = (type) => {
    const filterdProducts = data?.filter((i) => i.array === type);
    return filterdProducts;
  };
  return (
    <Layout>
      <div className="grid grid-cols-4 gap-5">
        {filterNavItems("Best of Electronics").map((i) => (
          <div className="h-[350px] w-[300px] p-2 flex flex-col items-center justify-center gap-2 ">
            <div className=" w-[90%] h-[80%] flex items-center justify-center p-2">
              <img src={i.image.url} alt="loading" />
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <Text customClass={"font-semibold "} name={i.title} />
              <Text customClass={"text-[green] text-sm"} name={i.price} />
              <Text customClass={"text-[gray] text-sm"} name={i.description} />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
