import { useEffect } from "react";
import { productsFetch } from "../controller/User";

const { useSelector, useDispatch } = require("react-redux");

export function filterNavItems(type) {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    await dispatch(productsFetch());
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const items = useSelector((state) => state.products.items);
  // typeof window !== "undefined" &&
  //   window.localStorage.setItem("items", JSON.stringify(items));
  const filterdProducts = items?.filter((i) => i.array === type);
  return filterdProducts;
}
