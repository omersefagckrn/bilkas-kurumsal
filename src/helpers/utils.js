export const toKebabCase = (str) => {
	return str
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
};

export const fromKebabCase = (str) => {
	return str.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
};
