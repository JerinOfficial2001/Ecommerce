import ShortNavList from "@/src/component/ShortNavList";
import Text from "@/src/component/Text";
import Layout from "@/src/layout/Layout";
import { filterNavItems } from "@/src/utils/Filter";
import { useRouter } from "next/router";
import React from "react";

export default function ProductPage() {
  const { query } = useRouter();

  return (
    <Layout>
      <ShortNavList />
      <div className="grid grid-cols-4 gap-5">
        {filterNavItems(query.data).map((i) => (
          <div className=" h-[350px] w-[300px] p-2 flex flex-col items-center justify-center gap-2 ">
            <div className="flex items-center justify-center w-[100%] h-[75%]">
              <div className=" w-[70%] flex items-center justify-center p-2">
                <img src={i.image.url} alt="loading" className="h-[100%] " />
              </div>
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
