import { Router } from "express";

import { getOrderById } from "../controllers/orderController";

const router = Router();

router.get("/:orderId", getOrderById);

export default router;
