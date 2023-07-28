import ShortNavList from "@/src/component/ShortNavList";
import Layout from "@/src/layout/Layout";
import { useRouter } from "next/router";
import React from "react";

export default function categoryPage() {
  const router = useRouter();
  const windows =
    typeof window !== "undefined" && window.localStorage.getItem("userData");
  const userData = JSON.parse(windows);
  console.log("UserData", userData);
  return (
    <Layout customClass={"gap-0"} uname={userData?.uname}>
      <ShortNavList />
      <div className="h-[100%] w-[100%] flex gap-3 p-3">
        <div className="bg-white h-[800px] w-[20%]">hello</div>
        <div className="bg-white  w-[80%]">{router.query.title}</div>
      </div>
    </Layout>
  );
}
