import React from "react";
import Text from "./Text";

export default function Login({
  inputDatas,
  handleSubmit,
  setloading,
  setinputDatas,
}) {
  const { email, password } = inputDatas;
  return (
    <>
      <div className="p-[5%] h-[100%] w-[60%] flex flex-col items-center justify-between">
        <div className=" w-[100%] flex flex-col gap-4">
          <input
            className="w-full border-none "
            type="text"
            placeholder="Enter Email"
            label="Enter Email"
            value={email}
            onChange={(e) => {
              setinputDatas({ ...inputDatas, email: e.target.value });
            }}
          />

          <input
            className="w-full border-none"
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setinputDatas({ ...inputDatas, password: e.target.value });
            }}
          />
          <Text
            name={
              <p>
                By continuing, you agree to MrJkart's
                <span className="text-[rgb(40,115,240)]"> Terms of Use </span>
                and
                <span className="text-[rgb(40,115,240)]"> Privacy Policy </span>
                .
              </p>
            }
            customClass={" text-[gray] text-xs"}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="p-3 w-[100%] text-white bg-[#f62]"
          >
            Login
          </button>
        </div>

        <Text
          onclick={() => {
            setloading("signup");
            setinputDatas("");
          }}
          name={"New to Flipkart? Create an account"}
          customClass={"text-md text-[rgb(40,115,240)] cursor-pointer"}
        />
      </div>
    </>
  );
}
