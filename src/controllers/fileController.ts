import { NextFunction, Request, Response } from "express";
import uploadFileService from "../services/fileService";

export const uploadFileController = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { filename } = req.body;

		const uploadedFile = await uploadFileService.uploadFile(filename);

		if (!uploadedFile) throw new Error(`Upload failed`)
		return res.status(201).send(uploadedFile);
	} catch (err) {
		next(err);
	}
};

export const deleteFileController = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { filename } = req.body;

		await uploadFileService.deleteFile(filename);
		return res.status(204).send('Successfully deleted');
	} catch (err) {
		next(err);
	}
}