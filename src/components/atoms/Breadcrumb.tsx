'use client'

import { ReactElement } from 'react'
import clsx from 'clsx'
import Nav from '@components/atoms/Nav'

type BreadcrumbProps = {
	breadcrumb: string
	className?: string
}

function Breadcrumb({
	breadcrumb,
	className,
}: BreadcrumbProps): ReactElement | null {
	const classes = clsx(
		'text-body-xs font-heading uppercase font-black text-accent',
		className
	)

	return (
		<Nav>
			<ol className="flex items-center space-x-3">
				<li className={classes}>{breadcrumb}</li>
			</ol>
		</Nav>
	)
}
export default Breadcrumb
