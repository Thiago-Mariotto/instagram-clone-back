import fs from 'fs';

const readFile = async (filePath: string) => {
	return await fs.promises.readFile(filePath);
};

export default readFile;