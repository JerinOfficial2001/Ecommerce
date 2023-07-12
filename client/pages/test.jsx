import LoginModal from "@/src/component/LoginModal";
import SliderModule from "@/src/component/SliderModule";
import React, { useState } from "react";

export default function test() {
  const [open, setopen] = useState(true);
  return (
    <div className="h-[100vh] w-[100%] flex items-center justify-center">
      <SliderModule />
      <LoginModal open={open} close={() => {
          setopen(false);
        }}/>
      <button
        onClick={() => {
          setopen(true);
        }}
      >
        open
      </button>
    </div>
  );
}
