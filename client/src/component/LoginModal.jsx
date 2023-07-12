import { Modal } from "@mui/material";
import React from "react";

export default function LoginModal({ open, close }) {
  return (
    <Modal open={open}>
      <div>
        Hello
        <button onClick={close}>Close</button>
      </div>
    </Modal>
  );
}
