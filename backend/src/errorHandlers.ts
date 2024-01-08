import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.log(error);

    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) errorMessage = error.message;

    res.status(500).json({ message: errorMessage });
};

export const notFoundErrorHandler = (req: Request, res: Response, next: NextFunction) => {
    next(new Error("Endpoint not found"));
};
