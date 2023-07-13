import Modal from "@mui/material/Modal";
import React from "react";
import gif from "../assets/loader.gif";
import Image from "next/image";
import Text from "./Text";

export default function Loaders({ loader }) {
  return (
    <Modal open={loader}>
      <div className="h-[100vh] w-[100%] flex flex-col gap-2 items-center justify-center">
        <Image src={gif} alt="gif" />
        <Text name={"Loading..."} customClass={"text-white"} />
      </div>
    </Modal>
  );
}
