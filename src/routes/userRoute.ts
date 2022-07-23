import express from 'express';
import { createUserController } from '../controllers/userController';

const userRoute = express.Router();

userRoute.post('/', createUserController);

export default userRoute;