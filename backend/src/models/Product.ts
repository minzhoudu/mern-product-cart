import { InferSchemaType, Schema, model } from "mongoose";

const ProductSchema = new Schema(
    {
        title: { type: String, required: [true, "Title is missing"], trim: true },
        description: { type: String, trim: true },
        price: { type: Number, required: [true, "Price is missing"], min: [0, "Price must be greater than 0"] },
        discountPrice: { type: Number, min: [0, "Discount price must be greater than 0"] },
        rating: { type: Number, default: 0, min: [0, "Rating must be greater than 0"] },
        stock: { type: Number, default: 0, min: [0, "Stock must be greater than 0"] },
        brand: { type: String, lowercase: true, trim: true },
        category: { type: String, lowercase: true, trim: true },
        thumbnail: String,
        images: [String],
    },
    { timestamps: true, versionKey: false }
);

export type Product = InferSchemaType<typeof ProductSchema>;

export default model<Product>("Product", ProductSchema);
