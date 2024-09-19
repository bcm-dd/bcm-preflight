export const capitalise = (s: string) =>
	s.toLowerCase().replace(/(?:^|\s)([a-z])/g, (match) => match.toUpperCase())
