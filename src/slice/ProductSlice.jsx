import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Logout } from "../Firebase";

export const createProduct = createAsyncThunk(
  "/createProduct",
  async (product) => {
    try {
      let res = await axios.post("http://localhost:3000/products", product);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getProduct = createAsyncThunk("/getProduct", async () => {
  try {
    let res = await axios.get("http://localhost:3000/products");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteProduct = createAsyncThunk("/deleteProduct", async (id) => {
  try {
    let res = await axios.delete(`http://localhost:3000/products/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const productSlice = createSlice({
  name: "Product",
  initialState: {
    products: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    //create Product
    builder.addCase(createProduct.pending, (state, acton) => {
      state.isLoading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.isLoading = false;
    });

    //get Product
    builder.addCase(getProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.isLoading = false;
    });

    //delete Product
    builder.addCase(deleteProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = state.products.filter(
        (ele) => ele.id !== action.payload.id
      );
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const productReducer = productSlice.reducer;
