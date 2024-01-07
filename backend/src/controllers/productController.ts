import { NextFunction, Request, Response } from "express";
import { getAllProducts, createProduct, deleteById, getById } from "../services/productService";

export const getProducts = async (req: Request, res: Response) => {
    const products = await getAllProducts();

    res.json(products);
};

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await getById(req.params.id);

        res.json(product);
    } catch (error: any) {
        console.log(error.message);

        next(error);
    }
};

export const createNewProduct = async (req: Request, res: Response) => {
    const product = await createProduct();

    res.json(product);
};

export const deleteProduct = async (req: Request, res: Response) => {
    const product = await deleteById(req.params.id);

    res.json({
        message: "Product removed",
        product,
    });
};
