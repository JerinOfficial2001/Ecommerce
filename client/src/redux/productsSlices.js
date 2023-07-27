import {  createSlice } from "@reduxjs/toolkit";
import { productsCreate, productsFetch } from "../controller/User";

const initialState = {
  items: [],
  status: null,
  createStatus: null,
  singleItem: [],
  images: [],
  singleImg: {},
  singleProduct: {},
};

const productsSlices = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsByID: (state, { payload }) => {
      const id = payload;
      const index = state.items?.find((i) => i.array === id);
      state.singleItem = index;
    },
    getItemsByID: (state, { payload }) => {
      const id = payload;
      const index = state.items?.find((i) => i._id === id);
      state.singleProduct = index;
    },
    getImg: (state, { payload }) => {
      console.log("GetDatas", payload);
      state.images = payload;
    },
    getimgByID: (state, { payload }) => {
      const id = payload;
      const index = state.images?.find((i) => i._id === id);
      state.singleImg = index;
    },
  },
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [productsFetch.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.createStatus = "success";
    },
    [productsFetch.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
    [productsCreate.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [productsCreate.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.createStatus = "success";
    },
    [productsCreate.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
  },
});
export default productsSlices.reducer;
export const { getProductsByID, getimgByID, getImg, getItemsByID } =
  productsSlices.actions;
