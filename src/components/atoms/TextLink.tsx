import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { ReactElement, ReactNode, ComponentPropsWithoutRef } from 'react'

type InheritedProps = Omit<ComponentPropsWithoutRef<'a'>, keyof LinkProps> &
	LinkProps

type TextLinkProps = InheritedProps & {
	className?: string
	label?: string
	children?: ReactNode
}

function TextLink({
	className,
	children,
	label,
	...inheritedProps
}: TextLinkProps): ReactElement {
	const classes = clsx(
		'relative inline-block outline-none group transition-colors duration-300',
		'after:inline-block',
		'after:h-px after:duration-300',
		'after:absolute after:inset-x-0 after:-bottom-0.5',
		'after:bg-left after:bg-0/1 after:bg-gradient-to-r after:bg-no-repeat',
		'after:hover:bg-full',
		'after:from-current after:to-current',
		className
	)

	return (
		<Link
			aria-label={label}
			{...inheritedProps}
			className={classes}
			role="link"
		>
			<span className="relative inline-block">{children}</span>
		</Link>
	)
}

export default TextLink
export type { TextLinkProps }
