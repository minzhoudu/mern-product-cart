import "dotenv/config";
import mongoose from "mongoose";

import env from "./util/validateEnv";
import app from "./app";
import { connectDb } from "./config/dbConnect";

const PORT = env.PORT;

connectDb();

mongoose.connection.once("open", () => {
    console.log("Connected to the MongoDB database");

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
