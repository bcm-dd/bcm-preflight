import clsx from 'clsx'
import { ReactElement, ReactNode } from 'react'

interface NavProps {
	children: ReactNode
	ariaLabel?: string
	id?: string
	className?: string
}

function Nav({ ariaLabel, id, children, className }: NavProps): ReactElement {
	const classes = clsx('nav', className)

	return (
		<nav className={classes} aria-label={ariaLabel} id={id} role="menu">
			{children}
		</nav>
	)
}

export default Nav
export type { NavProps }
