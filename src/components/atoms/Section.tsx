import clsx from 'clsx'
import React, { ReactElement, ReactNode } from 'react'

interface SectionProps {
	className?: string
	htmlId?: string | null
	children?: ReactNode
}

function Section({ children, className, htmlId }: SectionProps): ReactElement {
	const classes = clsx('section', className)

	return (
		<section className={classes} id={htmlId ?? ''}>
			{children}
		</section>
	)
}

export default Section
export type { SectionProps }
