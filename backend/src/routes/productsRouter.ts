import { Router } from "express";

import { getProducts, createNewProduct, getProductById, deleteProduct } from "../controllers/productController";

const router = Router();

router.get("/", getProducts);
router.post("/", createNewProduct);

router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);

export default router;
