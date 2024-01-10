import { RootState } from "../store";

export const selectProduct = (state: RootState) => state.productReducer.products;
