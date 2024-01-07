import mongoose from "mongoose";

import env from "../util/validateEnv";

export const connectDb = async () => {
    try {
        await mongoose.connect(env.MONGO_URI);
    } catch (error) {
        console.error(error);
    }
};
