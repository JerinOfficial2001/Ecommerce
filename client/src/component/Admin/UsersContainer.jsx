import React from "react";
import CardContainer from "./CardContainer";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Card from "./Card";
import { deleteUser, usersFetch } from "@/src/controller/User";

export default function UserContainer({
  users,
 
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <CardContainer searchItems={users} Searchbar={"true"} name={"USERS"}>
      {users.map((i) => (
        <Card
          editBtn={"false"}
          deleteHandler={async () => {
            await deleteUser(i._id);
            await dispatch(usersFetch());
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
