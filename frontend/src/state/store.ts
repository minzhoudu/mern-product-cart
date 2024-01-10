import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./product/productSlice";
import orderReducer from "./order/orderSlice";
import cartReducer from "./cart/cartSlice";

export const store = configureStore({
    reducer: {
        productReducer: productReducer,
        orderReducer: orderReducer,
        cartReducer: cartReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
