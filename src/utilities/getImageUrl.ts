import { Media } from '@types'

interface ImageSizes {
	[k: string]: {
		url?: string
		width?: number
		height?: number
		mimeType?: string
		filesize?: number
		filename?: string
	}
}

const getImageUrl = (media?: Media | string, size?: string): string => {
	if (typeof media === 'string' || media === undefined || media === null) {
		return ''
	}

	const base = `${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}/media/`

	if (
		size &&
		media?.sizes !== undefined &&
		media?.sizes[size as keyof typeof media.sizes] !== undefined &&
		media?.sizes[size as keyof typeof media.sizes]?.filename
	) {
		return `${base}${media.sizes[size as keyof typeof media.sizes]?.filename}`
	}

	return media.filename ? `${base}${media.filename}` : ''
}

export default getImageUrl
