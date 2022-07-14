import { NextFunction, Request, Response } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
	console.log("🚀 ~ file: errorHandler.ts ~ err:", err.message);
	if (err instanceof Error) {
		switch (err.message) {
			case "upload failed": return res.status(503).json({ message: 'Upload temporary unavailable, try again later' });
			default: return res.status(500).json({ message: 'Internal Server Error' });
		}
	}

	return res.status(500).json({ message: 'Internal Server Error' });
};
