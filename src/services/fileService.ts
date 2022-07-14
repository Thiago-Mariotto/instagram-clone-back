import deleteTmpFile from '../utils/removeFile';
import S3Storage from '../utils/S3Storage';

// const tempUploadPath = filePaths.tempUploadFolder;

const uploadFile = async (filename: string) => {
	await S3Storage.S3SaveFile(filename);
	if (!await deleteTmpFile(filename)) {
		throw new Error('upload failed');
	}
	return true;
};

const deleteFile = async (filename: string) => {
	await S3Storage.S3RemoveFile(filename);
	return;
};

export default {
	uploadFile,
	deleteFile
};