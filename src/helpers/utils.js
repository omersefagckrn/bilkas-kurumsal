const turkishCharMap = {
	ç: 'c',
	ğ: 'g',
	ı: 'i',
	ö: 'o',
	ş: 's',
	ü: 'u',
	Ç: 'C',
	Ğ: 'G',
	İ: 'I',
	Ö: 'O',
	Ş: 'S',
	Ü: 'U'
};

export const toKebabCase = (str) => {
	return str
		.split('')
		.map((char) => turkishCharMap[char] || char)
		.join('')
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
};

export const fromKebabCase = (str) => {
	return str.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
};
