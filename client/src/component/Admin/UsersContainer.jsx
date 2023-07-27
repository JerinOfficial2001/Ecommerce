import React from "react";
import CardContainer from "./CardContainer";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getItemsByID } from "@/src/redux/productsSlices";
import Card from "./Card";
import { deleteProducts } from "@/src/controller/User";

export default function UserContainer({ users }) {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <CardContainer searchItems={users} Searchbar={"true"} name={"USERS"}>
      {users.map((i) => (
        <Card
          deleteHandler={() => {
            deleteProducts(i._id);
            router.push("/userDetails");
          }}
          title={i.uname}
          text={i.email}
          key={i._id}
          // image={i.image?.url}
        />
      ))}
    </CardContainer>
  );
}
