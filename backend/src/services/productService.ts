import { CreateProductDto, UpdateProductDto } from "../Dto/productDto";
import Product from "../models/Product";

export const getAll = async () => {
    return await Product.find().exec();
};

export const getById = async (productId: string) => {
    return await Product.findById(productId).exec();
};

export const create = async (product: CreateProductDto) => {
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

export const update = async (productId: string, updatedProduct: UpdateProductDto) => {
    return await Product.findByIdAndUpdate(productId, updatedProduct, {
        new: true,
        runValidators: true,
    }).exec();
};

export const deleteById = async (productId: string) => {
    return await Product.findByIdAndDelete(productId).exec();
};
