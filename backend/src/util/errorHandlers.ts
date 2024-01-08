import { NextFunction, Request, RequestHandler, Response } from "express";
import createHttpError, { isHttpError } from "http-errors";
import mongoose from "mongoose";

export const globalErrorHandler = (error: unknown, req: Request, res: Response, next: NextFunction) => {
    let errorMessage = "An unknown error occurred";
    let statusCode = 500;

    if (isHttpError(error)) {
        errorMessage = error.message;
        statusCode = error.status;
    }

    if (error instanceof mongoose.Error.ValidationError) {
        errorMessage = Object.values(error.errors)
            .map((value) => value.message)
            .join(", ");
        statusCode = 400;
    }

    res.status(statusCode).json({ message: errorMessage });
};

export const notFoundErrorHandler = (req: Request, res: Response, next: NextFunction) => {
    next(createHttpError(404, "Resource not found"));
};

export const catchAsync = (fn: RequestHandler) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};
