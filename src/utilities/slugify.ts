const slugify = (str: string): string => {
	return str
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '') // Remove accents
		.replace(/(\W+|\s+)/g, '-') // Replace space and other characters by hyphen
		.replace(/\-\-+/g, '-') // Replaces multiple hyphens by one hyphen
		.replace(/(^-+|-+$)/g, '')
		.toLowerCase() // Remove extra hyphens from beginning or end of the string
}

export default slugify
