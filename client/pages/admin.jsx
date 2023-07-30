import AddProductsContainer from "@/src/component/Admin/AddProductsContainer";
import Card from "@/src/component/Admin/Card";
import CardContainer from "@/src/component/Admin/CardContainer";
import EditProductsContainer from "@/src/component/Admin/EditProductsContainer";
import Products from "@/src/component/Admin/Products";
import UserContainer from "@/src/component/Admin/UsersContainer";
import { productsFetch, usersFetch } from "@/src/controller/User";
import Layout from "@/src/layout/Layout";
import { getItemsByID } from "@/src/redux/productsSlices";
import { classNames } from "@/src/utils/Classname";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Admin({ userData }) {
  const [clicky, setclicky] = useState("/");
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsFetch());
    dispatch(usersFetch());
  }, []);
  const products = useSelector((state) => state.products.items);
  const users = useSelector((state) => state.products.users);
  // console.log("USERS", users);
  const singleProduct = useSelector((state) => state.products.singleProduct);

  return (
    <Layout customClass={"gap-0"} searchItems={products}>
      <div className="h-[92vh] w-[100%] flex items-center p-2 gap-2">
        {/* <div className="h-[100%] w-[50%] p-4 ">hello</div> */}
        <CardContainer
          MainDivStyle={"flex-col flex items-center justify-center gap-2"}
        >
          <button
            className={classNames(
              clicky === "/"
                ? "bg-gradient-to-r from-[#519e9188] to-fuchsia-500 animate-pulse"
                : "bg-[#8080802c]",
              "hover:bg-gradient-to-r from-[#519e9188] to-fuchsia-500 font-semibold rounded-md shadow-lg  w-[100%] h-[90px] transition delay-150 duration-300 ease-in-out ..."
            )}
            onClick={() => {
              setclicky("/");
            }}
          >
            PRODUCTS
          </button>
          <button
            className={classNames(
              clicky === "users"
                ? "bg-gradient-to-r from-[#04700a] to-indigo-500 bg-[#8080802c] animate-pulse"
                : "bg-[#8080802c]",
              "hover:bg-gradient-to-r from-[#04700a] to-indigo-500 bg-[#8080802c] font-semibold rounded-md shadow-lg  w-[100%] h-[90px] transition delay-150 duration-300 ease-in-out ..."
            )}
            onClick={() => {
              setclicky("users");
            }}
          >
            USERS
          </button>

          <button
            className={classNames(
              clicky === "addProducts"
                ? "bg-gradient-to-r from-[pink] to-pink-500 bg-[#8080802c] animate-pulse"
                : "bg-[#8080802c]",
              "hover:bg-gradient-to-r from-[pink] to-pink-500 bg-[#8080802c] font-semibold rounded-md shadow-lg  w-[100%] h-[90px] transition delay-150 duration-300 ease-in-out ..."
            )}
            onClick={() => {
              setclicky("addProducts");
            }}
          >
            ADD PRODUCTS
          </button>
          <button
            className={classNames(
              clicky === "orders"
                ? "bg-gradient-to-r from-[red] to-blue-500 bg-[#8080802c] animate-pulse"
                : "bg-[#8080802c]",
              "hover:bg-gradient-to-r from-[red] to-blue-500 bg-[#8080802c] font-semibold rounded-md shadow-lg  w-[100%] h-[90px] transition delay-150 duration-300 ease-in-out ..."
            )}
            onClick={() => {
              setclicky("/");
            }}
          >
            ORDERS
          </button>
        </CardContainer>
        {clicky === "/" ? (
          <Products setclicky={setclicky} products={products} />
        ) : null}
        {clicky === "users" ? <UserContainer users={users} /> : null}
        {clicky === "addProducts" ? <AddProductsContainer /> : null}
        {clicky === "editProducts" ? (
          <EditProductsContainer
            singleProduct={singleProduct}
            setclicky={setclicky}
          />
        ) : null}
      </div>
    </Layout>
  );
}
