import React from "react";
import Text from "./Text";
import { TextField } from "@mui/material";

export default function SignUP({
  inputDatas,
  handleSubmit,
  setloading,
  setinputDatas,
}) {
  const { userType, uname, email, password, secretKey } = inputDatas;
  return (
    <>
      <div className="p-[5%] h-[100%] w-[60%] flex flex-col items-center justify-between">
        <div className=" w-[100%] flex flex-col gap-4">
          <div className=" w-[100%] flex gap-2 items-center  text-black">
            Register as
            <input
             
              type="radio"
              name="userType"
              value="admin"
              onChange={(e) => {
                setinputDatas({ ...inputDatas, userType: e.target.value });
              }}
            />
            Admin
            <input
             
              type="radio"
              name="userType"
              value="user"
              onChange={(e) => {
                setinputDatas({ ...inputDatas, userType: e.target.value });
              }}
            />
            User
          </div>
          {userType === "admin" ? (
            <input
              className="w-full border-none"
              type="text"
              placeholder="SecretKey"
              value={secretKey}
              onChange={(e) => {
                setinputDatas({ ...inputDatas, secretKey: e.target.value });
              }}
            />
          ) : null}
          <input
            className="w-full border-none"
            label="UserName"
            type="text"
            placeholder="Username"
            value={uname}
            onChange={(e) => {
              setinputDatas({ ...inputDatas, uname: e.target.value });
            }}
          />
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
            onClick={handleSubmit}
            className="p-3 w-[100%] text-white bg-[#f62]"
          >
            Create Account
          </button>
        </div>

        <Text
          onclick={() => {
            setloading("");
            setinputDatas("");
          }}
          name={"Already have an account?"}
          customClass={"text-md text-[rgb(40,115,240)] cursor-pointer"}
        />
      </div>
    </>
  );
}
