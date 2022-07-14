import { expect } from 'chai';
import removeSpaces from '../../utils/removeSpaces';

describe('-> Testing remove spaces strings', () => {
	const correctString = 'test string with spaces';
	const incorrectString = 'teststringwithoutspaces';

	describe('When a string is valid', () => {
		it('When a string is valid', () => {
			const out = removeSpaces(correctString);
			expect(out).to.be.equal(correctString.replace(/\s/g, ''));
		});
	});

	describe('When string as invalid', () => {
		it('If the pass value is a string without spaces', () => {
			const out = removeSpaces(incorrectString);
			expect(out).to.be.equal(incorrectString);
		});
	});
});