import { expect } from 'chai';
import fs from 'fs';
import configPaths from '../../config/paths';
import removeTempFile from '../../utils/removeFile';

const tempFolderPath = configPaths.tempUploadFolder;
const correctFilename = 'tempFile.txt';
const incorrectFilename = 'incorrectFile.txt';
const tempFilePath = `${tempFolderPath}/${correctFilename}`;

describe('-> Testing the temp file removal function', () => {
	describe('When the temp file exists', () => {

		beforeEach(() => {
			fs.writeFileSync(tempFilePath, 'test');
		});

		afterEach(() => {
			const fileExists = fs.existsSync(tempFilePath);
			if (fileExists) {
				fs.unlinkSync(tempFilePath);
			}
		});

		it('The function return true', async () => {
			const response = await removeTempFile(correctFilename);
			expect(response).to.be.equal(true);
		});

		it('The temp file is removed', async () => {
			await removeTempFile(correctFilename);
			expect(fs.existsSync(tempFilePath)).to.be.equal(false);
		});
	});

	describe('When the temp file not exists', () => {
		it('The function return false', async () => {
			const response = await removeTempFile(incorrectFilename);
			expect(response).to.be.equal(false);
		});
	});
});