import { SocialMedia as SocialMediaType } from '@types'
import clsx from 'clsx'
import React, { ReactElement } from 'react'
import SocialMedia from '@components/atoms/SocialMedia'

type SocialMediaGroupProps = SocialMediaType & {
	className?: string
}

function SocialMediaGroup({
	className,
	socialLinks,
}: SocialMediaGroupProps): ReactElement | null {
	const classes = clsx(
		'social-media flex flex-row space-x-4 tablet-landscape:space-x-6',
		className
	)

	return socialLinks && socialLinks.length > 0 ? (
		<ul className={classes}>
			{socialLinks.map((social, index) => (
				<li key={index}>
					<SocialMedia {...social} />
				</li>
			))}
		</ul>
	) : null
}

export default SocialMediaGroup
export type { SocialMediaGroupProps }
