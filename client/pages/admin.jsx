import Card from "@/src/component/Admin/Card";
import CardContainer from "@/src/component/Admin/CardContainer";
import { deleteProducts } from "@/src/controller/User";
import Layout from "@/src/layout/Layout";
import { getItemsByID } from "@/src/redux/productsSlices";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Admin({ userData }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  console.log("PRODUCTS", products);
  const singleProducts = useSelector((state) => state.products.singleProduct);
  console.log("singleProducts", singleProducts);
  if (singleProducts !== {}) {
    window.localStorage.setItem(
      "singleProducts",
      JSON.stringify(singleProducts)
    );
  }
  return (
    <Layout uname={userData?.uname} customClass={"gap-0"}>
      <div className="h-[92vh] w-[100%] flex items-center p-2 gap-2">
        {/* <div className="h-[100%] w-[50%] p-4 ">hello</div> */}
        <CardContainer
          MainDivStyle={"flex-col flex items-center justify-center gap-2"}
        >
          <button
            className="hover:animate-pulse font-semibold rounded-md shadow-lg hover:bg-gradient-to-r from-[#519e9188] to-fuchsia-500 bg-[#8080802c] w-[100%] h-[90px] transition delay-150 duration-300 ease-in-out ..."
            onClick={() => {
              router.push("/addProducts");
            }}
          >
            PRODUCTS
          </button>
          <button
            className="hover:animate-pulse font-semibold rounded-md shadow-lg hover:bg-gradient-to-r from-[#04700a] to-indigo-500 bg-[#8080802c] w-[100%] h-[90px] transition delay-150 duration-300 ease-in-out ..."
            onClick={() => {
              router.push("/addProducts");
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
        <CardContainer Searchbar={"true"} name={"PRODUCTS"}>
          {products.map((i) => (
            <Card
              editHandler={() => {
                const id = i._id;
                dispatch(getItemsByID(id));
                router.push("/editProduct");
              }}
              deleteHandler={() => {
                deleteProducts(i._id);
                router.push("/userDetails");
              }}
              title={i.title}
              text={i.category}
              key={i._id}
              image={i.image?.url}
            />
          ))}
        </CardContainer>
      </div>
    </Layout>
  );
}
