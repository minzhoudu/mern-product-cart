import { Router } from "express";

import {
    getProducts,
    createProduct,
    getProductById,
    deleteProduct,
    updateProduct,
} from "../controllers/productController";

const router = Router();

router.get("/", getProducts);
router.post("/", createProduct);

router.get("/:productId", getProductById);
router.patch("/:productId", updateProduct);
router.delete("/:productId", deleteProduct);

export default router;
