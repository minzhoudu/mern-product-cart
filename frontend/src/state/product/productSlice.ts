import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Product } from "../../interfaces/product";
import axios from "axios";

const initialState: { products: Product[] } = {
    products: [],
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(setProductsAsync.pending, () => {
                console.log("pending");
            })
            .addCase(setProductsAsync.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.products = action.payload;
            });
    },
});

export const setProductsAsync = createAsyncThunk("product/setProductsAsync", async () => {
    const response = await axios.get("/api/products");

    return response.data;
});

export default productSlice.reducer;
