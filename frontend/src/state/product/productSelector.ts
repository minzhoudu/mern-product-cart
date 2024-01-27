import { RootState } from "../store";

export const selectProducts = (state: RootState) => state.productReducer.products;
export const selectCurrentProduct = (state: RootState) => state.productReducer.selectedProduct;
export const selectSearchKeyword = (state: RootState) => state.productReducer.searchKeyword;
