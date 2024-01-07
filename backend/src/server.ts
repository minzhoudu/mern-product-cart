import "dotenv/config";
import mongoose from "mongoose";

import app from "./app";
import { connectDb } from "./config/dbConnect";

const PORT = process.env.PORT || 3000;

connectDb();

mongoose.connection.once("open", () => {
    console.log("Connected to the MongoDB database");

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
