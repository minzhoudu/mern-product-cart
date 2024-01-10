import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../interfaces/cart";

const initialState: { cart: CartItem[]; totalCartPrice: number; totalCartItems: number } = {
    cart: [],
    totalCartPrice: 0,
    totalCartItems: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;

            const productInCart = state.cart.find((item) => item._id === product._id);

            if (productInCart) {
                productInCart.quantity++;
                productInCart.totalPrice = productInCart.quantity * productInCart.price;
                state.totalCartPrice += productInCart.totalPrice;
            } else {
                state.cart.push({ ...product, quantity: 1, totalPrice: product.price });
                state.totalCartPrice += product.price;
            }
            state.totalCartItems++;
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
