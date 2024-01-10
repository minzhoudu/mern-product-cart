import { Router } from "express";

import { createOrder, deleteOrder, getOrderById, updateOrder, getAllOrders } from "../controllers/orderController";

const router = Router();

router.post("/", createOrder);

router.get("/", getAllOrders);
router.get("/:orderId", getOrderById);
router.put("/:orderId", updateOrder);
router.delete("/:orderId", deleteOrder);

export default router;
