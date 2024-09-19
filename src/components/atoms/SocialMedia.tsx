import clsx from 'clsx'
import React, { ReactElement } from 'react'

import Link from 'next/link'
import TextLink from '@components/atoms/TextLink'
import Icon from '@components/atoms/Icon'

interface SocialMediaProps {
	label: string
	url: string
	className?: string
}

export function getAriaLabel(icon: string) {
	switch (icon.toLowerCase()) {
		case 'facebook':
			return 'Like us on facebook'
		case 'youtube':
			return 'Subscribe to our channel on Youtube'
		default:
			return `Follow us on ${icon}`
	}
}

function SocialMedia({
	className,
	label,
	url,
}: SocialMediaProps): ReactElement {
	const classes = clsx(
		'relative outline-none group text-current transition-colors duration-300',
		className
	)
	return (
		<Link
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className={classes}
			role="link"
			aria-label={getAriaLabel(label)}
		>
				<span className="inline-block size-5">
					<Icon name={label.toLowerCase() === 'twitter' ? 'x' : label.toLowerCase()} />
				</span>
		</Link>
	)
}

export default SocialMedia
export type { SocialMediaProps }
