import "@/styles/globals.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productsReducer, { productsFetch } from "../src/redux/productsSlices";
import { productsApi } from "@/src/redux/productsApi";

export default function App({ Component, pageProps }) {
  const store = configureStore({
    reducer: {
      products: productsReducer,
      [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware),
  });

  store.dispatch(productsFetch());
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
