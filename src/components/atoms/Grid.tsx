import clsx from 'clsx'
import React, { ReactElement, ReactNode } from 'react'

type GridProps = {
	className?: string
	children?: ReactNode
}

function Grid({ children, className }: GridProps): ReactElement {
	const classes = clsx('grid grid-cols-12 gap-5', className)

	return <div className={classes}>{children}</div>
}

export default Grid
export type { GridProps }
