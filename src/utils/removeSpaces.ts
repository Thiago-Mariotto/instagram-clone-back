const removeSpaces = (name: string): string => {
	console.log('renaming ' + name);
	return name.replace(/\s/g, '');
}

export default removeSpaces;