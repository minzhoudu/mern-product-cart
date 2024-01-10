import { RootState } from "../store";

export const selectCart = (state: RootState) => state.cartReducer.cart;
export const selectCartTotal = (state: RootState) => state.cartReducer.totalCartPrice;
