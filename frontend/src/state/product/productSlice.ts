import { createSlice } from "@reduxjs/toolkit";

import { Product } from "../../interfaces/product";

const initialState: Product[] = [];

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
});

export default productSlice.reducer;
