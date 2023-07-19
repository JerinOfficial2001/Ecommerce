import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productsReducer, { productsFetch } from "../src/redux/productsSlices";
import { MyContext } from "@/src/context/MyContext";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [loading, setloading] = useState("");

  const store = configureStore({
    reducer: {
      products: productsReducer,
    },
  });
  store.dispatch(productsFetch());

  return (
    <Provider store={store}>
      <MyContext.Provider value={{ loading, setloading}}>
        <Component {...pageProps} />
      </MyContext.Provider>
    </Provider>
  );
}
