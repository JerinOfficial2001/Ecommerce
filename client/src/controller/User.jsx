import { toast } from "react-hot-toast";
import { auth } from "../redux/api";

export const createUser = async (userType, uname, email, password) => {
  try {
    await fetch(auth + "/register", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userType,
        uname,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    toast.success("Created Account Successfully");
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (email, password) => {
  try {
    await fetch(auth + "/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "UserRegistered");
        if (data.status == "ok") {
          toast.success("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", data.data);
          window.location.href = "./userPage";
        }
      });
  } catch (error) {
    console.log(error);
  }
};
