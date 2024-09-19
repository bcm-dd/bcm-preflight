export const formatPhoneNumber = (phoneNumber: string): string => {
	// Replace single spaces with dot and space
	const formattedNumber = phoneNumber.replace(/ /g, '. ')

	// Split the phone number into individual characters, join them with space
	return formattedNumber.split('').join(' ').replaceAll('.  ', '. ')
}
