import { Schema, model } from "mongoose";

export const ProductSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    discountPrice: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String],
});

export default model("Product", ProductSchema);
