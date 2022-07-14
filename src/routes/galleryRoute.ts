import express from 'express';
import { deleteFileController, uploadFileController } from '../controllers/fileController';
import upload from '../middlewares/upload';

const galleryRoute = express.Router();

// galleryRoute.get('/', listFilesController);
// galleryRoute.get('/:id', listFileController);
galleryRoute.post('/upload', upload.single('file'), uploadFileController);
// galleryRoute.delete('/update', updateFileController);
galleryRoute.delete('/remove', deleteFileController);

export default galleryRoute;