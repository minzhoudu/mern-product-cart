import { NextFunction, Request, RequestHandler, Response } from "express";
import createHttpError, { isHttpError } from "http-errors";

export const globalErrorHandler = (error: unknown, req: Request, res: Response, next: NextFunction) => {
    let errorMessage = "An unknown error occurred";
    let statusCode = 500;

    if (isHttpError(error)) {
        errorMessage = error.message;
        statusCode = error.status;
    }

    res.status(statusCode).json({ message: errorMessage });
};

export const notFoundErrorHandler = (req: Request, res: Response, next: NextFunction) => {
    next(createHttpError(404, "Resource not found"));
};

export const catchAsync = (fn: RequestHandler) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};
