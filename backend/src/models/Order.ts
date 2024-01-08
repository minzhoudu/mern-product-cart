import { InferSchemaType, Schema, model } from "mongoose";
import Product from "./Product";

const OrderSchema = new Schema(
    {
        products: [Product],
        total: { type: Number, defalut: 0 },
        discountedTotal: { type: Number, defalut: 0 },
        totalProducts: { type: Number, defalut: 0 },
        totalQuantity: { type: Number, defalut: 0 },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export type Order = InferSchemaType<typeof OrderSchema>;

export default model<Order>("Order", OrderSchema);
