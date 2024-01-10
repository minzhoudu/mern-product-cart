import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./product/productSlice";

export const store = configureStore({
    reducer: {
        productReducer: productReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
