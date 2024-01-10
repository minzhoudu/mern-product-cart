import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Product } from "../../interfaces/product";
import axios from "axios";

const initialState: { products: Product[]; searchKeyword: string } = {
    products: [],
    searchKeyword: "",
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        searchProduct: (state, action: PayloadAction<string>) => {
            state.searchKeyword = action.payload;
        },
    },
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

export const { searchProduct } = productSlice.actions;
export default productSlice.reducer;
