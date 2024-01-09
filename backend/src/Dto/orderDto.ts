import mongoose from "mongoose";

export interface CreateOrderDto {
    products: [
        {
            productId: mongoose.Types.ObjectId;
            quantity: number;
        }
    ];
    totalProducts: number;
    totalQuantity: number;
    total: number;
    discountedTotal: number;
}
