import { MouseEventHandler, ReactNode } from 'react'
import clsx from 'clsx'

type TabButtonProps = {
	label?: string
	onClick?: MouseEventHandler<HTMLButtonElement>
	isActive: boolean
	children?: ReactNode
	className?: string
}

function TabButton({
	label,
	onClick,
	className,
	isActive = false,
	children,
}: TabButtonProps): JSX.Element {
	const classes = clsx(
		'relative transition-all duration-300 pb-4 hover:text-dark tablet-landscape:pb-6',
		'text-h6 tablet:text-h6-tablet laptop:text-h6-desktop',
		isActive ? 'text-dark' : 'text-dark-600',
		className
	)

	return (
		<button className={classes} onClick={onClick}>
			{label}
			{children}
		</button>
	)
}

export default TabButton
export type { TabButtonProps }
