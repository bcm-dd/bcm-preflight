import clsx from 'clsx'
import React, { ReactElement } from 'react'

// HeadingProps constrains headings to levels h1-h6.
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
}

/**
 * text-h1 tablet:text-h1-tablet laptop:text-h1-desktop
 * text-h2 tablet:text-h2-tablet laptop:text-h2-desktop
 * text-h3 tablet:text-h3-tablet laptop:text-h3-desktop
 * text-h4 tablet:text-h4-tablet laptop:text-h4-desktop
 * text-h5 tablet:text-h5-tablet laptop:text-h5-desktop
 * text-h6 tablet:text-h6-tablet laptop:text-h6-desktop
 */

// Heading allows @components to pass a heading level via props.
function Heading({
	level = 'h1',
	children,
	className,
}: HeadingProps): ReactElement {
	const H = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
		React.createElement(level, props, children)

	const classes = clsx(
		`font-heading text-balance text-${level} tablet:text-${level}-tablet laptop:text-${level}-desktop`,
		className
	)

	return <H className={classes}>{children}</H>
}

export default Heading
export type { HeadingProps }
