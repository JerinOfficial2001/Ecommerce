import React from "react";
import CardContainer from "./CardContainer";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getItemsByID } from "@/src/redux/productsSlices";
import Card from "./Card";
import { deleteProducts } from "@/src/controller/User";

export default function Products({ products }) {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <CardContainer searchItems={products} Searchbar={"true"} name={"PRODUCTS"}>
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
  );
}
