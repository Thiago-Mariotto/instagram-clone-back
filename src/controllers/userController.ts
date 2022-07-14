import { NextFunction, Request, Response } from "express";
import { createUser } from "../services/userService";

export const createUserController = async (req: Request, res: Response, next: NextFunction) => {
	const { body } = req;
	try {
		const newUser = await createUser(body);

		return res.status(201).json(newUser);
	} catch (error) {
		console.log("🚀 ~ file: userController.ts ~ line 15 ~ createUserController ~ error", error)
		next(error);
	}
}