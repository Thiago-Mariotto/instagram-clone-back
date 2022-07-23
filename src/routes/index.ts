import express, { Request, Response } from 'express';
import galleryRoute from './galleryRoute';
import userRoute from './userRoute';

const router = express.Router();

router.use('/gallery', galleryRoute);
router.use('/user', userRoute);
router.get('/', (req: Request, res: Response) => res.send('Successfully'));

export default router;
