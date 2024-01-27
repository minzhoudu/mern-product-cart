import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "./../../interfaces/product";

import axios from "axios";

const initialState: { products: Product[]; searchKeyword: string; selectedProduct: Product | null } = {
    products: [],
    selectedProduct: null,
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
            .addCase(setProductsAsync.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.products = action.payload;
            })
            .addCase(setProductByIdAsync.fulfilled, (state, action: PayloadAction<Product>) => {
                state.selectedProduct = action.payload;
            });
    },
});

export const setProductsAsync = createAsyncThunk("product/setProductsAsync", async () => {
    return (await axios.get<Product[]>("/api/products")).data;
});

export const setProductByIdAsync = createAsyncThunk("product/setProductByIdAsync", async (productId: string) => {
    return (await axios.get<Product>(`/api/products/${productId}`)).data;
});

export const { searchProduct } = productSlice.actions;
export default productSlice.reducer;
