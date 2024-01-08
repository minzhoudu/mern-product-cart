import mongoose from "mongoose";

import app from "./app";
import env from "./util/validateEnv";
import { connectDb } from "./config/dbConnect";

const PORT = env.PORT;

connectDb();

mongoose.connection.once("open", () => {
    console.log("Connected to the MongoDB database");

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
