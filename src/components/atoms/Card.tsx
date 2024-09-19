'use client'

import clsx from 'clsx'
import { ReactElement } from 'react'
import Heading from '@components/atoms/Heading'
import { LinkGroup } from '@types'
import Paragraph from '@components/atoms/Paragraph'
type CardProps = {
	title: string
	shortDescription?: string | null
	links?: LinkGroup
	variant?: 'white' | 'light' | 'none'
	hasLink?: boolean
	className?: string
}

function Card({
	className,
	title,
	variant,
	shortDescription,
	hasLink = false,
}: CardProps): ReactElement {
	const classes = clsx(
		className,
		'card space-y-4 flex flex-col h-full grow transition-all duration-200',
		variant === 'light' ? 'bg-dark-50 p-6' : '',
		'tablet-landscape:duration-300',
	)

	return (
		<article className={classes} role="article">
			<header>
				<Heading
					level="h6"
					className="font-extrabold"
				>
					{title}
				</Heading>
			</header>
			{shortDescription && (
				<div className="grow">
					<Paragraph
						className="text-body-sm group-hover:text-current"
						paragraph={shortDescription}
					/>
				</div>
			)}
			{hasLink && (
				<footer className="sr-only">
					<span>
						Read more <span className="sr-only">{`about ${title}`}</span>
					</span>
				</footer>
			)}
		</article>
	)
}

export default Card
export type { CardProps }
