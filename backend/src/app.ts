import "dotenv/config";
import express from "express";

import productsRouter from "./routes/productsRouter";
import orderRouter from "./routes/orderRouter";
import { globalErrorHandler, notFoundErrorHandler } from "./util/errorHandlers";

const app = express();
app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/order", orderRouter);

app.use(notFoundErrorHandler);
app.use(globalErrorHandler);

export default app;
