import { Router } from "express";

import { createOrder, deleteOrder, getOrderById, updateOrder } from "../controllers/orderController";

const router = Router();

router.post("/", createOrder);

router.get("/:orderId", getOrderById);
router.put("/:orderId", updateOrder);
router.delete("/:orderId", deleteOrder);

export default router;
