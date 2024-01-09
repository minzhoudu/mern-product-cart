import { RequestHandler } from "express";
import { catchAsync } from "../util/errorHandlers";

import * as orderService from "../services/orderService";
import mongoose from "mongoose";
import createHttpError from "http-errors";

export const getOrderById: RequestHandler = catchAsync(async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.orderId)) throw createHttpError(400, "Invalid order id");

    const order = await orderService.getById(req.params.orderId);
    if (!order) throw createHttpError(404, "Order with that id not found");

    res.status(200).json(order);
});

export const createOrder: RequestHandler = catchAsync(async (req, res) => {
    if (!req.body.products) throw createHttpError(400, "Products are required");

    const order = await orderService.createNewOrder(req.body);

    res.status(201).json(order);
});

export const updateOrder: RequestHandler = catchAsync(async (req, res) => {});

export const deleteOrder: RequestHandler = catchAsync(async (req, res) => {});
