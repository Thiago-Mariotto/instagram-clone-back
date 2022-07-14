import express, { Request, Response } from 'express';
import gallery from './galleryRoute';

const router = express.Router();

router.use('/gallery', gallery);

router.get('/', (req: Request, res: Response) => res.send('Successfully'));

export default router;
