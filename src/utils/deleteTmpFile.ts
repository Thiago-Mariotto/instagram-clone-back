import fs from 'fs';
import configPaths from '../config/paths';

const tempUploadFile = configPaths.tempUploadFolder;

const deleteTmpFile = async (filename: string) => {
	if (!fs.existsSync(`${tempUploadFile}/${filename}`)) {
		return false;
	}
	fs.unlinkSync(`${tempUploadFile}/${filename}`);
	return true;
}

export default deleteTmpFile;