import clsx from 'clsx'
import React, { ReactElement } from 'react'
import { LinkGroup } from '@types'

import ButtonLink, { ButtonLinkVariant } from '@components/atoms/ButtonLink'
import getLinkUrl from '@utilities/getLinkUrl'

type ButtonGroupProps = {
	links?: LinkGroup
	className?: string
}

function ButtonGroup({
	links,
	className,
}: ButtonGroupProps): ReactElement | null {
	const classes = clsx(
		'flex flex-row flex-none space-x-4',
		className
	)

	return links && links.length > 0 ? (
		<footer className={classes}>
			{links.map((link, index) => {
				return (
					<ButtonLink
						key={index}
						href={getLinkUrl(link.link)}
						label={link.link.label}
						variant={link.link.appearance}
					/>
				)
			})}
		</footer>
	) : null
}

export default ButtonGroup
export type { ButtonGroupProps }
