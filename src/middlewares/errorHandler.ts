import { NextFunction, Request, Response } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
	console.log("🚀 ~ file: errorHandler.ts ~ err:", err.message);
	if (err instanceof Error) {
		switch (err.message) {
			case "upload failed": return res.status(503).json({ message: 'Upload temporary unavailable, try again later' });
			case "service unavailable": return res.status(503).json({ message: 'Service unavailable, try again later' });
			case "not found": return res.status(404).json({ message: 'Not found' });
			case "unauthorized": return res.status(401).json({ message: 'Unauthorized' });
			case "forbidden": return res.status(403).json({ message: 'Forbidden' });
			case "bad request": return res.status(400).json({ message: 'Bad request' });

			default: return res.status(500).json({ message: 'Internal server error' });
		}
	}

	return res.status(500).json({ message: 'Internal Server Error' });
};
