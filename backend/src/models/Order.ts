import { InferSchemaType, Schema, model } from "mongoose";

const OrderSchema = new Schema(
    {
        products: [
            {
                productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
                quantity: { type: Number, default: 1 },
            },
        ],
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

export type IOrder = InferSchemaType<typeof OrderSchema>;

export default model<IOrder>("Order", OrderSchema);
