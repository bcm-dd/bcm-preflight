import React, { ReactElement, useState, useCallback } from 'react'
import clsx from 'clsx'
import Grid from '@components/atoms/Grid'
import Heading from '@components/atoms/Heading'
import { PageHead } from '@types'
import Paragraph from '@components/atoms/Paragraph'
import Media from '@components/atoms/Media'
import ButtonGroup from '@components/atoms/ButtonGroup'
import { motion } from 'framer-motion'

type HeroProps = PageHead & {
	className?: string
}

function Hero({ title, content, media, links }: HeroProps): ReactElement {
	const [isLoaded, setIsLoaded] = useState(false)

	const handleMediaLoad = useCallback(() => setIsLoaded(true), [])

	return (
		<motion.div
			className={clsx(
				'hero scroll-margin-top @container relative text-white overflow-hidden aspect-video transition duration-500',
				isLoaded ? 'opacity-0' : 'opacity-100'
			)}
			id="site-header"
			initial={{ opacity: 0 }}
			animate={{ opacity: isLoaded ? 0 : 1 }}
			transition={{ duration: 0.5 }}
		>
			{media && typeof media !== 'string' && (
				<Media
					className="relative z-0"
					imgClassName="object-cover object-center size-full"
					videoClassName="object-cover object-center size-full"
					resource={media ?? undefined}
					background={true}
					playing={true}
					priority
					onLoad={handleMediaLoad}
				/>
			)}
			{title && (
				<div className="absolute z-20 inset-0 flex flex-col justify-end tablet-landscape:justify-center">
					<Grid className="px-5 tablet:px-10">
						<div className="col-span-full tablet:col-span-6 tablet-landscape:col-span-8 laptop:col-span-6">
							<div className="space-y-4">
								<header className="space-y-3 @tablet-landscape:space-y-4">
									<Heading level="h1" title={title}>
										{title}
									</Heading>
									{content && (
										<Paragraph
											paragraph={content}
											className="text-body-md tablet:text-body-lg"
										/>
									)}
								</header>
								{links && links.length > 0 && <ButtonGroup links={links} />}
							</div>
						</div>
					</Grid>
				</div>
			)}
		</motion.div>
	)
}

export default Hero
export type { HeroProps }
