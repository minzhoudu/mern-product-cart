import express from "express";

import productsRouter from "./routes/productsRouter";

const app = express();
app.use(express.json());

app.use("/api/products", productsRouter);

export default app;
