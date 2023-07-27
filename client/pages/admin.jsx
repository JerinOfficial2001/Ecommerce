import Card from "@/src/component/Admin/Card";
import CardContainer from "@/src/component/Admin/CardContainer";
import Products from "@/src/component/Admin/Products";
import UserContainer from "@/src/component/Admin/UsersContainer";
import {
  deleteProducts,
  productsFetch,
  usersFetch,
} from "@/src/controller/User";
import Layout from "@/src/layout/Layout";
import { getItemsByID } from "@/src/redux/productsSlices";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Admin({ userData }) {
  const [singleProducts, setsingleProducts] = useState({});
  const [clicky, setclicky] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsFetch());
    dispatch(usersFetch());
  }, []);
  const products = useSelector((state) => state.products.items);
  const users = useSelector((state) => state.products.users);
  console.log("USERS", users);
  const single = useSelector((state) => state.products.singleProduct);
  useEffect(() => {
    if (Object.keys(single).length == 0) {
      setsingleProducts({
        array: "empty",
        category: "empty",
        description: "empty",
        price: "empty",
        spec: "empty",
        title: "empty",
      });
    } else {
      setsingleProducts(single);
    }
  }, [single]);
  console.log("singleProducts", singleProducts);
  typeof window !== "undefined"
    ? localStorage.setItem("singleProducts", JSON.stringify(singleProducts))
    : null;

  return (
    <Layout
      uname={userData?.uname}
      customClass={"gap-0"}
      searchItems={products}
    >
      <div className="h-[92vh] w-[100%] flex items-center p-2 gap-2">
        {/* <div className="h-[100%] w-[50%] p-4 ">hello</div> */}
        <CardContainer
          MainDivStyle={"flex-col flex items-center justify-center gap-2"}
        >
          <button
            className="hover:animate-pulse font-semibold rounded-md shadow-lg hover:bg-gradient-to-r from-[#519e9188] to-fuchsia-500 bg-[#8080802c] w-[100%] h-[90px] transition delay-150 duration-300 ease-in-out ..."
            onClick={() => {
              setclicky("products");
            }}
          >
            PRODUCTS
          </button>
          <button
            className="hover:animate-pulse font-semibold rounded-md shadow-lg hover:bg-gradient-to-r from-[#04700a] to-indigo-500 bg-[#8080802c] w-[100%] h-[90px] transition delay-150 duration-300 ease-in-out ..."
            onClick={() => {
              setclicky("users");
            }}
          >
            USERS
          </button>

          <button
            className="hover:animate-pulse font-semibold rounded-md shadow-lg hover:bg-gradient-to-r from-[pink] to-pink-500 bg-[#8080802c] w-[100%] h-[90px] transition delay-150 duration-300 ease-in-out ..."
            onClick={() => {
              router.push("/addProducts");
            }}
          >
            ADD PRODUCTS
          </button>
          <button
            className="hover:animate-pulse font-semibold rounded-md shadow-lg hover:bg-gradient-to-r from-[red] to-blue-500 bg-[#8080802c] w-[100%] h-[90px] transition delay-150 duration-300 ease-in-out ..."
            onClick={() => {
              router.push("/addProducts");
            }}
          >
            ORDERS
          </button>
        </CardContainer>
        {clicky === "products" ? <Products products={products} /> : null}
        {clicky === "users" ? (
          <UserContainer setclicky={setclicky} users={users} />
        ) : null}
      </div>
    </Layout>
  );
}
