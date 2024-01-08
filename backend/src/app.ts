import "dotenv/config";
import express from "express";

import productsRouter from "./routes/productsRouter";
import { globalErrorHandler, notFoundErrorHandler } from "./errorHandlers";

const app = express();
app.use(express.json());

app.use("/api/products", productsRouter);

app.use(notFoundErrorHandler);

app.use(globalErrorHandler);

export default app;
