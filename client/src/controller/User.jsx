import { toast } from "react-hot-toast";
import { auth, url } from "../redux/api";

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
          window.location.href = "./userDetails";
        }
      });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProducts = async (id) => {
  try {
    await fetch(url + `/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "deleted") {
          toast.success("Deleted successful");
          console.log(data);
        }
      });
  } catch (error) {
    console.log(error);
  }
};
export const updateProducts = async (
  id,
  title,
  category,
  price,
  description,
  spec,
  array,
  productImg
) => {
  try {
    await fetch(url + `/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        title,
        category,
        price,
        description,
        spec,
        array,
        image: productImg,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "updated") {
          toast.success("Updated successful");
          console.log(data);
        }
      });
  } catch (error) {
    console.log(error);
  }
};
