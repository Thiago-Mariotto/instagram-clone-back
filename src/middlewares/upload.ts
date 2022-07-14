import fs from 'fs';
import multer from 'multer';
import path from 'path';

const tmpUploadFiles = path.resolve(__dirname, '..', '..', 'tmp', 'uploads');

const convertFilename = (originalName: string): string => {
	const timestamp = new Date().getTime();
	const filename = `${timestamp}-${originalName.replace(/\s/g, '')}`;

	return filename;
};

const createTmpDirectory = () => {
	fs.mkdirSync(tmpUploadFiles, { recursive: true });
}

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		createTmpDirectory();
		callback(null, tmpUploadFiles);
	},
	filename: (req, file, callback) => {
		const newFileName = convertFilename(file.originalname);
		req.body.filename = newFileName;
		callback(null, newFileName);
	}
});

const upload = multer({ storage });

export default upload;