import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";

import { catchAsync } from "../util/errorHandlers";
import * as productService from "../services/productService";

export const getProducts: RequestHandler = catchAsync(async (req, res) => {
    let products = await productService.getAll();

    if (req.query.title) {
        const title = req.query.title as string;
        products = products.filter((product) => product.title.toLowerCase().includes(title.toLowerCase()));
    }

    if (req.query.category) {
        const category = req.query.category as string;
        products = products.filter((product) => product.category?.toLowerCase().includes(category.toLowerCase()));
    }

    res.status(200).json(products);
});

export const createProduct: RequestHandler = catchAsync(async (req, res) => {
    if (!req.body.title) throw createHttpError(400, "Title is missing");
    if (!req.body.price) throw createHttpError(400, "Price is missing");

    const product = await productService.create(req.body);

    res.status(201).json(product);
});

export const getProductById: RequestHandler = catchAsync(async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.productId)) throw createHttpError(400, "Invalid product id");

    const product = await productService.getById(req.params.productId);
    if (!product) throw createHttpError(404, "Product with that id not found");

    res.status(200).json(product);
});

export const updateProduct: RequestHandler = catchAsync(async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.productId)) throw createHttpError(400, "Invalid product id");

    const updatedProduct = await productService.update(req.params.productId, req.body);

    res.json({
        message: "Product updated",
        product: updatedProduct,
    });
});

export const deleteProduct: RequestHandler = catchAsync(async (req, res) => {
    const product = await productService.deleteById(req.params.productId);
    if (!product) throw createHttpError(404, "Product with that id not found");

    res.json({
        message: "Product removed",
        product,
    });
});
