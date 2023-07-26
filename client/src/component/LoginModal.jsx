import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import Text from "./Text";
import Image from "next/image";
import Login from "./Login";
import SignUP from "./SignUp";
import { createUser, loginUser } from "../controller/User";

export default function LoginModal({ open, close }) {
    const [loading, setloading] = useState("");
    const [inputDatas, setinputDatas] = useState({
      userType: "",
      uname: "",
      email: "",
      password: "",
      secretKey: "",
    });
    const { userType, uname, email, password, secretKey } = inputDatas;
    const handleSubmit = () => {
      if (email !== "" && password !== "") {
        setinputDatas({
          email: "",
          password: "",
        });
        loginUser(email, password);
      } else {
        toast.error("All fields are mandatory!");
      }
    };
    const signUpHandler = () => {
      if (userType === "admin" && secretKey != "MrJKart") {
        toast.error("Invalid SecretKey");
      }
      if (userType !== "" && uname !== "" && email !== "" && password !== "") {
        setinputDatas({
          userType: "",
          uname: "",
          email: "",
          password: "",
        });
        console.log(inputDatas);
        createUser(userType, uname, email, password);
      } else {
        toast.error("All fields are mandatory!");
      }
    };
  return (
    <Modal
      open={open}
      onClose={close}
      className="flex items-center justify-center"
    >
     
        <div className="w-[55%] h-[500px] bg-white flex items-center shadow">
          <div
            className=" p-[5%] w-[40%] h-[500px] bg-white flex flex-col items-center justify-between"
            style={{ background: "#2874f0" }}
          >
            <div className="w-[100%] flex flex-col gap-4 ">
              <Text
                name={"signup" === loading ? "SignUp" : "Login"}
                customClass={"text-[30px] font-bold text-white"}
              />
              <Text
                name={
                  <p>
                    Get access to your Orders, <br />
                    Wishlist and Recommendations
                  </p>
                }
                customClass={" font-semibold text-white"}
              />
            </div>
            <Image
              className="h-[200px] w-[100%]"
              src={require("../assets/flipkart.jpeg")}
              alt=""
            />
          </div>
          {"signup" === loading ? (
            <SignUP
              setinputDatas={setinputDatas}
              inputDatas={inputDatas}
              handleSubmit={signUpHandler}
              setloading={setloading}
            />
          ) : (
            <Login
              setinputDatas={setinputDatas}
              inputDatas={inputDatas}
              handleSubmit={handleSubmit}
              setloading={setloading}
            />
          )}
        </div>
      
    </Modal>
  );
}
