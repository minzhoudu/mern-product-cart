import Product from "../models/Product";

export const getAllProducts = async () => {
    return await Product.find({});
};

export const getById = async (id: string) => {
    const product = await Product.findById(id).exec();

    if (!product) {
        throw new Error("Product not found");
    }

    return product;
};

export const createProduct = async () => {
    return await Product.create({
        title: "Product 1",
        description: "Product 1 description",
        price: 100,
        discountPrice: 90,
        rating: 4.5,
        stock: 10,
        brand: "Brand 1",
        category: "Category 1",
        thumbnail: "https://picsum.photos/200",
        images: ["https://picsum.photos/200"],
    });
};

export const deleteById = async (id: string) => {
    return await Product.findByIdAndDelete(id);
};
