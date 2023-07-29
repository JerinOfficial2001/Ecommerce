import { createSlice } from "@reduxjs/toolkit";
import {
  getProductById,
  getProductsByArray,
  productsCreate,
  productsFetch,
  usersFetch,
} from "../controller/User";

const initialState = {
  items: [],
  status: null,
  createStatus: null,
  singleItem: [],
  images: [],
  singleImg: {},
  singleProduct: {},
  users: [],
  productsByArray: [],
  productById: {},
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
    [usersFetch.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [usersFetch.fulfilled]: (state, { payload }) => {
      state.users = payload;
      state.createStatus = "success";
    },
    [usersFetch.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
    [getProductsByArray.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [getProductsByArray.fulfilled]: (state, { payload }) => {
      state.productsByArray = payload;
      state.createStatus = "success";
    },
    [getProductsByArray.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
    [getProductById.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [getProductById.fulfilled]: (state, { payload }) => {
      state.productById = payload;
      state.createStatus = "success";
    },
    [getProductById.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
  },
});
export default productsSlices.reducer;
export const { getimgByID, getImg, getItemsByID } = productsSlices.actions;
