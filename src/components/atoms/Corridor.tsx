import clsx from 'clsx'
import React, { ReactElement, ReactNode } from 'react'

interface CorridorProps {
	className?: string
	children?: ReactNode
}

function Corridor({ children, className }: CorridorProps): ReactElement {
	const classes = clsx('mx-auto w-full px-5 max-w-screen-2xl', className)

	return <div className={classes}>{children}</div>
}

export default Corridor
export type { CorridorProps }
