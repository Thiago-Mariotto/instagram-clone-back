import aws from "aws-sdk";
import configPaths from '../config/paths';
import fileType from "./fileType";
import readFile from "./readFile";

const bucketName = process.env.AWS_BUCKET_NAME as string;

const client = new aws.S3({
	region: 'us-east-1',
});

const S3SaveFile = async (filename: string) => {
	const filePath = `${configPaths.tempUploadFolder}/${filename}`;
	const fileContent = readFile(filePath);
	const typeFileContent = fileType(filePath);

	return client.putObject({
		Bucket: bucketName,
		Key: `${typeFileContent}/${filename}`,
		ACL: 'public-read',
		Body: fileContent,
		ContentType: typeFileContent
	}).promise();
};

const S3RemoveFile = (filename: string) => {
	return client.deleteObject({
		Bucket: 'insta-test',
		Key: filename
	}).promise();
};

export default {
	S3SaveFile,
	S3RemoveFile
};