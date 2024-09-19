import clsx from 'clsx'
import React, { Fragment, ReactElement } from 'react'
import { Cta } from '@types'
import ButtonGroup from '@components/atoms/ButtonGroup'
import Grid from '@components/atoms/Grid'
import Media from '@components/atoms/Media'
import RichText from '@components/atoms/RichText'
import Overlay from '@components/atoms/Overlay'
import getImageUrl from '@utilities/getImageUrl'

type ImageCallToActionProps = Cta & {
	className?: string
}

function ImageCallToAction({
	title,
	richText,
	links,
	featureImage,
	className,
}: ImageCallToActionProps): ReactElement {
	const classes = clsx('@container relative text-white', className)

	const contentClasses = clsx(
		'absolute z-20 inset-0 flex flex-col justify-end pt-28 pb-12 px-8 tablet-landscape:justify-center tablet-landscape:p-10 laptop:p-12'
	)

	const imageClasses = clsx(
		'relative z-0 overflow-hidden aspect-2/3 bg-light tablet:aspect-2/1 tablet-landscape:aspect-3/2 laptop:aspect-3/1'
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
						<div className="col-span-full space-y-6 tablet:col-span-6 tablet-landscape:col-span-8 laptop:col-span-6">
							<header className="space-y-3 @tablet-landscape:space-y-4">
								{title && (
									<h3 className="font-heading text-h3 uppercase tablet:text-h3-tablet laptop:text-h2-desktop">
										{title}
									</h3>
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

export default ImageCallToAction
export type { ImageCallToActionProps }
