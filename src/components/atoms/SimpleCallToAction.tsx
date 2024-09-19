import clsx from 'clsx'
import React, { ReactElement } from 'react'
import { Cta } from '@types'
import Paragraph from '@components/atoms/Paragraph'
import Heading from '@components/atoms/Heading'
import ButtonGroup from '@components/atoms/ButtonGroup'
import RichText from '@components/atoms/RichText'
type SimpleCallToActionProps = Cta & {
	className?: string
	variant?: 'primary' | 'light'
}

function SimpleCallToAction({
	title,
	richText,
	links,
	className,
}: SimpleCallToActionProps): ReactElement {
	const classes = clsx('@container basic-banner bg-primary text-white', className)

	const containerClasses = clsx(
		'z-10 flex flex-col space-y-6 p-8',
		'@tablet-landscape:flex-row @tablet-landscape:items-center @tablet-landscape:justify-between @tablet-landscape:space-y-0 @tablet-landscape:space-x-12 @tablet-landscape:p-10 @laptop:p-12'
	)

	return (
		<article className={classes}>
			<div className={containerClasses}>
				<header className="space-y-3">
					{title && (
						<Heading level="h3" className="font-extrabold">
							{title}
						</Heading>
					)}
					{richText && (
						<RichText content={richText} />
					)}
				</header>
				{links && links.length > 0 && <ButtonGroup links={links} />}
			</div>
		</article>
	)
}

export default SimpleCallToAction
export type { SimpleCallToActionProps }
