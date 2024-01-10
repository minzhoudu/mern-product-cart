import { RootState } from "../store";

export const selectProducts = (state: RootState) => state.productReducer.products;
