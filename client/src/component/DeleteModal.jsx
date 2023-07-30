import { Fade, Modal } from "@mui/material";
import React from "react";
import Text from "./Text";

export default function DeleteModal({
  alert,
  title,
  submitHandler,
  open,
  close,
}) {
  return (
    <Modal
      open={open}
      onClose={close}
      className="flex items-center justify-center"
    >
      <Fade in={open}>
        <div className="rounded-md bg-white h-[230px] w-[400px] p-6 flex-col flex justify-between">
          <Text name={title} customClass={"text-lg font-semibold"} />
          <Text
            name={alert}
            customClass={"text-[gray] text-md font-semibold"}
          />
          <div className="w-[100%] flex items-center justify-between gap-6">
            <button
              onClick={close}
              className="hover:text-[#2a6fed] w-[50%] p-4 border-[1px] font-semibold"
            >
              CANCEL
            </button>
            <button
              onClick={submitHandler}
              className="p-4 w-[50%] bg-[#2a6fed] text-white border-[1px] font-semibold"
            >
              REMOVE
            </button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
