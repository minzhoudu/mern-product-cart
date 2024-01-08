import { InferSchemaType, Schema } from "mongoose";

export const OrderSchema = new Schema(
    {},
    {
        timestamps: true,
        versionKey: false,
    }
);

export type Order = InferSchemaType<typeof OrderSchema>;
