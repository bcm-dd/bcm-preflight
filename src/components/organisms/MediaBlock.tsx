'use client'
import { MediaBlock as MediaBlockType } from '@types'
import { ReactElement } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Grid from '@components/atoms/Grid'
import Media from '@components/atoms/Media'
import Video from '@components/atoms/Video'

type MediaBlockProps = MediaBlockType & {
	className?: string
}

function MediaBlock({
	blockType,
	mediaBlockFields,
	className,
}: MediaBlockProps): ReactElement | null {
	if (!mediaBlockFields) return null

	const { anchorId, media } = mediaBlockFields

	const classes = clsx(blockType, className)

	return (
		<motion.section
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.25, margin: '24px' }}
			className={classes}
			id={anchorId ?? ''}
		>
			<Grid>
				{media.map((medium, index) => {
					const { media, embeddedVideo, gridLayout } = medium

					const mediaClasses = clsx(
						'col-span-full',
						gridLayout === 'half'
							? 'tablet:col-span-4 tablet-landscape:col-span-6'
							: '',
						gridLayout === 'fullscreen' ? '-mx-8' : ''
					)

					return (
						<div className={mediaClasses} key={index}>
							{embeddedVideo && embeddedVideo.embed ? (
								<Video
									resource={embeddedVideo.video}
									src={embeddedVideo.videoURL}
									platform={embeddedVideo.platform}
									videoClassName="aspect-video object-cover object-center w-full h-full"
								/>
							) : media && typeof media !== 'string' ? (
								<Media
									resource={media}
									imgClassName="object-cover object-center w-full h-full"
								/>
							) : null}
						</div>
					)
				})}
			</Grid>
		</motion.section>
	)
}

export default MediaBlock
export type { MediaBlockProps }
