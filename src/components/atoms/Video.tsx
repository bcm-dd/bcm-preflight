'use client'
import { ReactElement, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })
import clsx from 'clsx'
import { StaticImageData } from 'next/image'
import { Media as MediaType } from '@types'
import Figure from '@components/atoms/Figure'

type VideoProps = {
	id?: string
	className?: string
	background?: boolean
	platform?: ('youtube' | 'vimeo' | 'internal') | null
	autoplay?: boolean
	embedded?: boolean
	alt?: string
	src?: StaticImageData | string | null // for static media
	resource?: MediaType | string | null
	videoClassName?: string
	playing?: boolean
	onReady?(): void
	onError?(): void
}

function Video({
	id,
	src,
	className,
	background = false,
	autoplay = false,
	platform = 'internal',
	embedded = false,
	resource,
	videoClassName,
	playing = background || autoplay,
	onReady,
	onError,
	alt,
}: VideoProps): ReactElement | null {
	const [isPlaying, setIsPlaying] = useState<boolean>(playing)

	const [ready, setReady] = useState(false)
	const onPlay = () => {
		if (!ready) {
			setReady(true)
			onReady?.()
		}
	}

	const figureClasses = clsx('relative', className)
	const videoClasses = clsx(
		'video',
		background ? 'video-object-fit' : '',
		videoClassName
	)

	if (!src && resource && typeof resource !== 'string') {
		src = `${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}/media/${resource.filename}`
	}

	const handleKeyDown = (e: KeyboardEvent) => {
		switch (e.key) {
			case 'Enter':
			case ' ':
				setIsPlaying(!isPlaying)
				break
			default:
				break
		}
	}

	return src && typeof src === 'string' ? (
		<Figure className={figureClasses}>
			<ReactPlayer
				id={id}
				className={videoClasses}
				width="100%"
				height="100%"
				url={src}
				muted={background || platform === 'youtube'}
				playsinline={background}
				playing={isPlaying}
				controls={!background}
				loop={background}
				onStart={onPlay}
				onError={onError}
				config={{
					youtube: {
						playerVars: {
							modestbranding: 1,
						},
					},
				}}
			/>
			{/*{embedded && (*/}
			{/*	<PlayButton*/}
			{/*		onClick={() => setIsPlaying(!isPlaying)}*/}
			{/*		onKeyDown={() => handleKeyDown}*/}
			{/*		title={alt}*/}
			{/*		playing={isPlaying}*/}
			{/*	/>*/}
			{/*)}*/}
		</Figure>
	) : null
}

export default Video
export type { VideoProps }
