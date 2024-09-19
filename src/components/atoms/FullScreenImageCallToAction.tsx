import clsx from 'clsx'
import React, { Fragment, ReactElement } from 'react'
import { Cta } from '@types'
import Heading from '@components/atoms/Heading'
import ButtonGroup from '@components/atoms/ButtonGroup'
import Grid from '@components/atoms/Grid'
import Media from '@components/atoms/Media'
import RichText from '@components/atoms/RichText'
import Overlay from '@components/atoms/Overlay'
import getImageUrl from '@utilities/getImageUrl'

type FullScreenImageCallToActionProps = Cta & {
	className?: string
}

function FullScreenImageCallToAction({
	title,
	richText,
	links,
	featureImage,
	className,
}: FullScreenImageCallToActionProps): ReactElement {
	const classes = clsx(
		'@container relative text-white h-screen-11/12 overflow-hidden tablet:h-svh',
		className
	)

	const contentClasses = clsx(
		'absolute z-20 inset-0 flex flex-col justify-end pt-28 pb-12 tablet-landscape:justify-center tablet-landscape:pb-14 tablet-landscape:pt-34 laptop:pb-16 laptop:pt-36'
	)

	const imageClasses = clsx(
		'relative z-0 overflow-hidden bg-light w-screen h-svh'
	)

	return (
		<article className={classes}>
			{featureImage && typeof featureImage !== 'string' && (
				<Fragment>
					<Overlay />
					<Media
						className={imageClasses}
						imgClassName="object-cover object-center"
						fill
						src={getImageUrl(featureImage)}
					/>
				</Fragment>
			)}
			<div className={contentClasses}>
				<div className="relative z-10 flex flex-col">
					<Grid>
						<div className="col-span-full space-y-6 tablet:col-span-6 tablet-landscape:col-span-8 laptop:col-span-7 laptop:col-start-2">
							<header className="space-y-3 @tablet-landscape:space-y-4">
								{title && (
									<Heading level="h2" className="">
										{title}
									</Heading>
								)}
								{richText && <RichText content={richText} />}
							</header>
							{links && links.length > 0 && <ButtonGroup links={links} />}
						</div>
					</Grid>
				</div>
			</div>
		</article>
	)
}

export default FullScreenImageCallToAction
export type { FullScreenImageCallToActionProps }
