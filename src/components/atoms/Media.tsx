import { ElementType, Ref, FC } from 'react'
import { StaticImageData } from 'next/image'
import { Media as MediaType } from '@types'

import Image from '@components/atoms/Image'
import Video from '@components/atoms/Video'
export interface MediaProps {
	src?: StaticImageData | string // for static media
	alt?: string
	caption?: string | null
	resource?: MediaType | string // for Payload media
	sizes?: string // for NextImage only
	priority?: boolean // for NextImage only
	fill?: boolean // for NextImage only
	background?: boolean // For Background Video only
	embedded?: boolean // For Background Video only
	autoplay?: boolean // For Video only
	platform?: ('youtube' | 'vimeo' | 'internal') | null // For Video only
	className?: string
	imgClassName?: string
	videoClassName?: string
	playing?: boolean // For Video only
	htmlElement?: ElementType | null
	onClick?: () => void
	onLoad?: () => void
	ref?: Ref<null | HTMLImageElement | HTMLVideoElement>
	width?: number
	height?: number

	onReady?(): void // For Video only
	onError?(): void // For Video only
}

const Media: FC<MediaProps> = (props) => {
	const { resource } = props

	const isVideo =
		typeof resource !== 'string' && resource?.mimeType?.includes('video')

	return (
		<>
			{isVideo ? (
				<Video {...props} />
			) : (
				<Image alt={props.alt ?? ''} {...props} />
			)}
		</>
	)
}

export default Media
