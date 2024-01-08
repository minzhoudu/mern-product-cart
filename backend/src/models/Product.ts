import { InferSchemaType, Schema, model } from "mongoose";

export const ProductSchema = new Schema(
    {
        title: { type: String, required: [true, "Title is missing"] },
        description: String,
        price: { type: Number, required: [true, "Price is missing"] },
        discountPrice: Number,
        rating: { type: Number, default: 0 },
        stock: { type: Number, default: 0 },
        brand: String,
        category: String,
        thumbnail: String,
        images: [String],
    },
    { timestamps: true, versionKey: false }
);

export type Product = InferSchemaType<typeof ProductSchema>;

export default model<Product>("Product", ProductSchema);
