import clsx from 'clsx'
import React, { HTMLAttributes, ReactElement, ReactNode } from 'react'

interface FullWidthGridProps {
	tag?: 'div' | 'section'
	className?: string
	children?: ReactNode
}

function FullWidthGrid({
	tag = 'div',
	children,
	className,
}: FullWidthGridProps): ReactElement {
	const classes = clsx(
		'grid grid-cols-[1fr_minmax(0,calc(100vw-4rem))_1fr]',
		'tablet:grid-cols-[3rem_minmax(0,calc(100vw-6rem))_3rem]',
		'laptop:grid-cols-[4rem_minmax(0,calc(100vw-8rem))_4rem]',
		className
	)

	const Component = ({ ...props }: HTMLAttributes<HTMLElement>) =>
		React.createElement(tag, props, children)

	return <Component className={classes}>{children}</Component>
}

export default FullWidthGrid
export type { FullWidthGridProps }
