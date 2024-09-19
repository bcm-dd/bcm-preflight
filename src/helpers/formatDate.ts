const formatDate = (date: string): string => {
	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	]

	const day = new Date(date)

	return `${day.getDate()}.${day.getMonth()}.${day.getFullYear()}`
}

export default formatDate
