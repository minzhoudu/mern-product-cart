import { RequestHandler } from "express";
import * as productService from "../services/productService";

export const getProducts: RequestHandler = async (req, res, next) => {
    try {
        const products = await productService.getAllProducts();

        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};

export const createNewProduct: RequestHandler = async (req, res, next) => {
    try {
        const product = await productService.createProduct(req.body);

        res.status(201).json(product);
    } catch (error) {
        next(error);
    }
};

export const getProductById: RequestHandler = async (req, res, next) => {
    try {
        const product = await productService.getById(req.params.id);

        res.status(200).json(product);
    } catch (error: any) {
        next(error);
    }
};

export const deleteProduct: RequestHandler = async (req, res) => {
    const product = await productService.deleteById(req.params.id);

    res.json({
        message: "Product removed",
        product,
    });
};
