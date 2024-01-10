import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateOrderDto, Order } from "../../interfaces/orders";
import axios from "axios";

const initialState: { orders: Order[] } = {
    orders: [],
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(setOrdersAsync.fulfilled, (state, action: PayloadAction<Order[]>) => {
                state.orders = action.payload;
            })
            .addCase(cancelOrderAsync.fulfilled, (state, action: PayloadAction<Order>) => {
                state.orders = state.orders.filter((order) => order._id !== action.payload._id);
            });
    },
});

export const setOrdersAsync = createAsyncThunk("order/setOrdersAsync", async () => {
    const response = await axios.get("/api/orders");

    return response.data;
});

export const createOrderAsync = createAsyncThunk("order/createOrderAsync", async (order: CreateOrderDto) => {
    const response = await axios.post("/api/orders", order);

    return response.data;
});

export const cancelOrderAsync = createAsyncThunk("order/cancelOrderAsync", async (orderId: string) => {
    const response = await axios.delete(`/api/orders/${orderId}`);

    return response.data.order;
});

export default orderSlice.reducer;
