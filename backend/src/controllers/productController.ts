import { RequestHandler } from "express";
import { createProduct, deleteById, getAllProducts, getById } from "../services/productService";

export const getProducts: RequestHandler = async (req, res, next) => {
    try {
        const products = await getAllProducts();

        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};

export const createNewProduct: RequestHandler = async (req, res) => {
    const product = await createProduct();

    res.status(201).json(product);
};

export const getProductById: RequestHandler = async (req, res, next) => {
    try {
        const product = await getById(req.params.id);

        res.status(200).json(product);
    } catch (error: any) {
        next(error);
    }
};

export const deleteProduct: RequestHandler = async (req, res) => {
    const product = await deleteById(req.params.id);

    res.json({
        message: "Product removed",
        product,
    });
};
