import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";
import { url } from "./api";

const initialState = {
  items: [],
  status: null,
  createStatus: null,
  singleItem: [],
  images: [],
  singleImg: {},
};
export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/products`);
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
      const response = await axios.post(`${url}/products`, values);
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);
const productsSlices = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsByID: (state, { payload }) => {
      const id = payload;
      const index = state.items?.find((i) => i.array === id);
      state.singleItem = index;
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
export const { getProductsByID, getimgByID, getImg } = productsSlices.actions;
