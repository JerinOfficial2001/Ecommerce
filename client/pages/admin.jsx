import Card from "@/src/component/Admin/Card";
import CardContainer from "@/src/component/Admin/CardContainer";
import Text from "@/src/component/Text";
import Layout from "@/src/layout/Layout";
import React from "react";
import { useSelector } from "react-redux";

export default function Admin({ userData }) {
  const products = useSelector((state) => state.products.items);
  console.log("PRODUCTS", products);
  return (
    <Layout uname={userData?.uname} customClass={"gap-0"}>
      <div className="h-[92vh] w-[100%] flex items-center p-2 gap-2">
        <div className="h-[100%] w-[50%] p-4 ">hello</div>
        <CardContainer name={"PRODUCTS"}>
          {products.map((i) => (
            <Card title={i.title} text={i.category}  key={i._id} image={i.image?.url}/>
          ))}
        </CardContainer>
      </div>
    </Layout>
  );
}
