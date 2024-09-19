'use client'
import { ImageSliderBlock as ImageSliderBlockType } from '@types'
import { ReactElement } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Grid from '@components/atoms/Grid'
import HeadingAndContent from '@components/molecules/HeadingAndContent'
import 'swiper/css'
import 'swiper/css/a11y'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Autoplay } from 'swiper/modules'
import Media from '@components/atoms/Media'

type ImageSliderBlockProps = ImageSliderBlockType & {
	className?: string
}

function ImageSliderBlock({
	blockType,
	imageSliderBlockFields,
	className,
}: ImageSliderBlockProps): ReactElement | null {
	if (!imageSliderBlockFields) return null

	const { anchorId, title, breadcrumb, richText, links, slides } =
		imageSliderBlockFields

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
				<div className="col-span-full tablet:col-span-6 tablet-landscape:col-span-8 laptop:col-span-6">
					<HeadingAndContent
						breadcrumb={breadcrumb}
						title={title}
						richText={richText}
						headingLevel="h3"
						links={links}
					/>
				</div>
			</Grid>
			{slides && slides.length > 0 && (
				<div>
					<Swiper
						className="w-full"
						slidesPerView={1}
						spaceBetween={30}
						modules={[A11y, Autoplay, Navigation]}
						effect="slide"
						loop={true}
						speed={500}
						autoplay={{
							delay: 3000,
							pauseOnMouseEnter: true,
							stopOnLastSlide: false,
						}}
					>
						{slides.map((image, index) => {
							return typeof image.media !== 'string' ? (
								<SwiperSlide key={index}>
									<Media resource={image.media} />
								</SwiperSlide>
							) : null
						})}
					</Swiper>
				</div>
			)}
		</motion.section>
	)
}

export default ImageSliderBlock
export type { ImageSliderBlockProps }
