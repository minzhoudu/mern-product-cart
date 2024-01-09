import { Router } from "express";

import { createOrder, deleteOrder, getOrderById } from "../controllers/orderController";

const router = Router();

router.post("/", createOrder);

router.get("/:orderId", getOrderById);
router.delete("/", deleteOrder);

export default router;
