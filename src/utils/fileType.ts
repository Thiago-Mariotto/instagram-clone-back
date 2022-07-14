import mime from 'mime';

const fileType = (filePath: string): string => {
	const ContentType = mime.getType(filePath);
	if (!ContentType) throw new Error('File not found');

	const type = ContentType.split('/')[0];

	return type;
}

export default fileType;