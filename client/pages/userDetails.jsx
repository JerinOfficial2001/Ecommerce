import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "@/src/redux/api";
import UserPage from "./userPage";
import Admin from "./admin";
import { toast } from "react-hot-toast";
import Home from ".";

export default function UserDetails() {
  const router = useRouter();
  const [userData, setuserData] = useState("");
  const [admin, setadmin] = useState(false);
  const userInfo = async () => {
    await fetch(auth + "/userData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");

        setuserData(data.data);

        if (data.data.userType == "admin") {
          setadmin(true);
        }
        if (data.data == "token expired") {
          toast.error("token expired login again");
          window.localStorage.clear();
          window.location.href = "./";
        }
      });
  };
  useEffect(() => {
    userInfo();
  }, []);
  typeof window !== "undefined" &&
    window.localStorage.setItem("userData", JSON.stringify(userData));

  return admin ? <Admin userData={userData} /> : <Home userData={userData} />;
}
