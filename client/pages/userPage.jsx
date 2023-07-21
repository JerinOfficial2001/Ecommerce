import Layout from "@/src/layout/Layout";
import React from "react";

export default function UserPage({ userData }) {
  console.log(userData);
  return (
    <Layout uname={userData.uname ? userData.uname : null}>hello user</Layout>
  );
}
