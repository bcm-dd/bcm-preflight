'use client'

import clsx from 'clsx'
import { FC, useState } from 'react'
import NextImage, { StaticImageData } from 'next/image'
import Figure from '@components/atoms/Figure'
import { MediaProps } from '@components/atoms/Media'

const Image: FC<MediaProps> = (props) => {
	const {
		className,
		imgClassName,
		onClick,
		onLoad: onLoadFromProps,
		sizes: sizesFromProps,
		resource,
		priority,
		fill,
		src: srcFromProps,
		alt: altFromProps,
		width: widthFromProps,
		height: heightFromProps,
		caption: captionFromProps,
	} = props
	const [isLoading, setIsLoading] = useState(true)

	let width: number | undefined = widthFromProps
	let height: number | undefined = heightFromProps
	let alt = altFromProps
	let src: StaticImageData | string | undefined = srcFromProps

	if (!src && resource && typeof resource !== 'string') {
		width = resource.width ?? 1920
		height = resource.height ?? 1080
		alt = resource.alt
		src = `${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}/media/${resource.filename}`
	}

	const breakpoints = {
		desktop: 1600,
		laptop: 1366,
		'tablet-landscape': 1024,
		tablet: 768,
		'mobile-wide': 414,
	}

	// NOTE: this is used by the browser to determine which image to download at different screen sizes
	const sizes =
		sizesFromProps ||
		Object.entries(breakpoints)
			.map(([, value]) => `(max-width: ${value}px) ${value}px`)
			.join(', ')

	const figureClasses = clsx( className)
	const classes = clsx(isLoading && `is-loading`, imgClassName)

	return (
		<Figure className={figureClasses}>
			<NextImage
				className={classes}
				src={src || ''}
				alt={alt || ''}
				onClick={onClick}
				onLoad={() => {
					setIsLoading(false)
					if (typeof onLoadFromProps === 'function') {
						onLoadFromProps()
					}
				}}
				fill={fill}
				width={!fill ? width : undefined}
				height={!fill ? height : undefined}
				sizes={sizes}
				quality={100}
				priority={priority}
			/>
			{captionFromProps && <figcaption>{captionFromProps}</figcaption>}
		</Figure>
	)
}

export default Image
