import ShortNavList from "@/src/component/ShortNavList";
import SignUP from "@/src/component/SignUp";
import Text from "@/src/component/Text";
import Login from "@/src/component/login";
import { createUser, loginUser } from "@/src/controller/User";
import Layout from "@/src/layout/Layout";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

export default function LoginPage() {
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
    <Layout customClass={"gap-0"}>
      <ShortNavList />
      <div className="w-[100%] flex items-center justify-center">
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
              src={require("../src/assets/flipkart.jpeg")}
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
      </div>
    </Layout>
  );
}
