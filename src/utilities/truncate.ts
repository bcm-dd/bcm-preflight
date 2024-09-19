const truncate = (str: string, num: number = 140): string => {
	return str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str
}

export default truncate
