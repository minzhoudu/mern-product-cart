import "dotenv/config";
import express from "express";

import orderRouter from "./routes/orderRouter";
import productsRouter from "./routes/productsRouter";
import { globalErrorHandler, notFoundErrorHandler } from "./util/errorHandlers";

const app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/orders", orderRouter);

app.use(notFoundErrorHandler);
app.use(globalErrorHandler);

export default app;
