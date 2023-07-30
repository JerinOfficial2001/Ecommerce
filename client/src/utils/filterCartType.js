import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartById } from "../controller/User";

export default function filterCartType(type) {
  // const dispatch = useDispatch();
  // const windows =
  //   typeof window !== "undefined" && window.localStorage.getItem("userData");
  // const userData = JSON.parse(windows);
  // // console.log("UserData", userData);
  // const fetchCartById = async () => {
  //   await dispatch(getCartById(userData?._id));
  // };
  // useEffect(() => {
  //   fetchCartById();
  // }, []);
  // const cart = useSelector((state) => state.products.cart);
  // // console.log("cart", cart);

  // const filteredData = cart?.filter((i) => i.cartType === type);
  // return filteredData;
}
