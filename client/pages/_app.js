import "@/styles/globals.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productsReducer, { productsFetch } from "../src/redux/productsSlices";

export default function App({ Component, pageProps }) {
  const store = configureStore({
    reducer: {
      products: productsReducer,
    },
  });
  store.dispatch(productsFetch());
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
