import path from 'path';

export default {
	tempUploadFolder: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
	bucketAws: process.env.AWS_BUCKET_URL,
}