import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./product/productSlice";
import orderReducer from "./order/orderSlice";

export const store = configureStore({
    reducer: {
        productReducer: productReducer,
        orderReducer: orderReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
