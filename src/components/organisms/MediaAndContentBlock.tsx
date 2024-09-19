'use client'
import { MediaAndContentBlock as MediaAndContentBlockType } from '@types'
import { ReactElement } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Grid from '@components/atoms/Grid'
import Media from '@components/atoms/Media'
import RichText from '@components/atoms/RichText'
import ButtonGroup from '@components/atoms/ButtonGroup'
import Heading from '@components/atoms/Heading'
import Accordion from '@components/molecules/Accordion'
import slugify from '@utilities/slugify'
import HeadingAndContent from '@components/molecules/HeadingAndContent'

type MediaAndContentBlockProps = MediaAndContentBlockType & {
	className?: string
}

function MediaAndContentBlock({
	blockType,
	mediaAndContentBlockFields,
	className,
}: MediaAndContentBlockProps): ReactElement | null {
	if (!mediaAndContentBlockFields) return null

	const { anchorId, breadcrumb, title, media, mediaPosition, richText, links } =
		mediaAndContentBlockFields

	const classes = clsx(blockType, className)

	const contentClasses = clsx(
		'col-span-full tablet:col-span-6 tablet-landscape:col-span-8 laptop:max-w-xl laptop:flex laptop:flex-col laptop:justify-center laptop:mx-auto laptop:col-span-6',
		mediaPosition === 'left' ? 'laptop:col-start-7' : 'laptop:col-start-1'
	)
	const mediaClasses = clsx(
		'col-span-full laptop:col-span-6',
		mediaPosition === 'left'
			? 'laptop:row-start-1 laptop:col-start-1'
			: 'laptop:col-start-7'
	)

	return (
		<motion.section
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.25, margin: '24px' }}
			className={classes}
			id={anchorId ?? ''}
		>
			{(title || richText) && (
				<div className={contentClasses}>
					<HeadingAndContent
						breadcrumb={breadcrumb}
						title={title}
						richText={richText}
						headingLevel="h3"
						links={links}
					/>
				</div>
			)}
			<Grid>
				<div className={mediaClasses}>
					{media && typeof media !== 'string' && (
						<Media
							imgClassName="object-cover object-center w-full h-full"
							videoClassName="aspect-video object-cover object-center w-full h-full"
							resource={media}
							background={true}
							playing={true}
						/>
					)}
				</div>
			</Grid>
		</motion.section>
	)
}

export default MediaAndContentBlock
export type { MediaAndContentBlockProps }
