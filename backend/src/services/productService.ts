import { ProductDto } from "../Dto/productDto";
import Product from "../models/Product";

export const getAllProducts = async () => {
    return await Product.find().exec();
};

export const getById = async (id: string) => {
    const product = await Product.findById(id).exec();

    if (!product) {
        throw new Error("Product not found");
    }

    return product;
};

export const createProduct = async (product: ProductDto) => {
    return await Product.create({
        title: product.title,
        description: product.description,
        price: product.price,
        discountPrice: product.discountPrice,
        rating: product.rating,
        stock: product.stock,
        brand: product.brand,
        category: product.category,
        thumbnail: product.thumbnail,
        images: product.images,
    });
};

export const deleteById = async (id: string) => {
    return await Product.findByIdAndDelete(id).exec();
};
