import { toast } from "react-hot-toast";
import { auth, url } from "../redux/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
      .then((data) => {
        console.log(data);
        if (data.status === "ok") {
          toast.success("Account Created Successfully");
        }
        if (data.error === "user exists!") {
          toast.error("user exists!");
        }
      });
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
        if (data.status === "ok") {
          toast.success("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", data.data);
          window.location.href = "./userDetails";
        }
        if (data.error == "User not Exists") {
          toast.error("User not Exists");
        }
        if (data.status == "error") {
          toast.error("Invalid Password");
        }
      });
  } catch (error) {
    console.log(error);
  }
};
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(auth + `/${id}`);
    if (response.data.status === "deleted") {
      toast.success("User Deleted Successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

export const usersFetch = createAsyncThunk("users/usersFetch", async () => {
  try {
    const response = await axios.get(`${auth}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
});

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get(`${url}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const productsCreate = createAsyncThunk(
  "products/productsCreate",
  async (values) => {
    try {
      const response = await axios.post(url, values);
      if (response.data.status === "added") {
        toast.success("Added Successfully");

        console.log("Added", response.data.data);
      }
      return response.data.data;
    } catch (error) {
      console.log(error);
      toast.error("Image Size should be below 50kb");
    }
  }
);
export const getProductsByArray = createAsyncThunk(
  "/products/getByArray",
  async (datas) => {
    // console.log(datas, "DATAS");
    try {
      const res = await axios.get(url + `/${datas}`);
      // console.log(res.data, "RES");
      return res?.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getProductById = createAsyncThunk(
  "/products/getById",
  async (id) => {
    // console.log(id, "ID");
    try {
      const res = await axios.get(url + `/array/${id}`);
      // console.log(res.data, "RES");
      return res?.data;
    } catch (error) {
      console.log(error);
    }
  }
);
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
        if (data.status === "deleted") {
          toast.success("Deleted successful");
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
        if (data.status === "updated") {
          toast.success("Updated successful");
          console.log(data);
        }
      });
  } catch (error) {
    console.log(error);
  }
};
export const getCartById = createAsyncThunk(
  "/cart/getCartById",
  async (user_id) => {
    // console.log(user_id, "ID");
    try {
      const res = await axios.get(url + `/cart/${user_id}`);
      // console.log(res.data.data, "RES");
      return res?.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const addCart = async (product_id, user_id) => {
  console.log(product_id, user_id, "values");
  try {
    const res = await axios.post(url + "/addtocart", { product_id, user_id });
    console.log(res.data.data, "RES");
    if (res.data.status === "added") {
      toast.success("Item Added to Cart");
    }
    return res?.data.data;
  } catch (error) {
    console.log(error);
  }
};
export const removeCartItem = async (id) => {
  // console.log(user_id, "ID");
  try {
    const res = await axios.delete(url + `/cart/${id}`);
    // console.log(res.data.data, "RES");
    if (res.data.status === "deleted") {
      toast.success("Item removed");
    }
  } catch (error) {
    console.log(error);
  }
};
export const editCartType = async (id, cartType) => {
  // console.log(cartType, "cartType");
  try {
    const res = await axios.put(url + `/cart/${id}`, { cartType });
    // console.log(res.data.data, "RES");
    if (res.data.status === "moved") {
      if (res.data.data.cartType === "saveForLater") {
        toast.success("Moved to Saved For Later");
      }
      if (res.data.data.cartType === "addToCart") {
        toast.success("Moved to Add To Cart");
      }
    }
  } catch (error) {
    console.log(error);
  }
};
