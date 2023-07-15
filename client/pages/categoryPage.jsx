import ShortNavList from "@/src/component/ShortNavList";
import Layout from "@/src/layout/Layout";
import React from "react";

export default function categoryPage() {
  return (
    <Layout customClass={"gap-0"}>
      <ShortNavList />
      <div className="h-[100%] w-[100%] flex gap-3 p-3">
        <div className="bg-white h-[800px] w-[20%]">hello</div>
        <div className="bg-white  w-[80%]">hhhhhjhkjgjkhgvjhgfhjgfhj</div>
      </div>
    </Layout>
  );
}
