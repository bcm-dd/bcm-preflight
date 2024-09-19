import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import React, { ReactElement, ComponentPropsWithoutRef } from 'react'


type InheritedProps = Omit<ComponentPropsWithoutRef<'a'>, keyof LinkProps> &
	LinkProps

export type ButtonLinkVariant =
	| 'primary'
	| 'secondary'
	| 'white'
	| 'primary-outline'
	| 'secondary-outline'
	| 'white-outline'

export const variantMap: Record<ButtonLinkVariant, string> = {
	primary: 'bg-primary border-primary text-white',
	secondary: 'bg-secondary border-secondary text-white',
	white: 'bg-white border-white text-dark',
	'primary-outline': 'text-primary border-primary hover:text-white hover:bg-primary',
	'secondary-outline': 'text-secondary border-secondary hover:text-white hover:bg-secondary',
	'white-outline': 'text-white border-white hover:text-dark hover:bg-white',
	'text': 'text-link',
}

type ButtonLinkProps = InheritedProps & {
	className?: string
	label?: string
	variant?: ButtonLinkVariant
}

export const buttonClassNames = (
	variant: ButtonLinkVariant,
	className?: string
): string => {


	return clsx(
		'relative inline-flex items-center duration-200 group outline-1 focus:outline-solid',
		variant !== 'text' ? 'font-heading uppercase font-extrabold text-body-sm tracking-wider h-12 px-3 transition-all border-2 border-solid' : 'after:inline-block after:h-px after:duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:bg-left after:bg-0/1 after:bg-gradient-to-r after:bg-no-repeat after:hover:bg-full after:from-current after:to-current',
		variantMap[variant.replace('_', '-')],
		className,
		'tablet-landscape:duration-300'
	)
}

function ButtonLink({
	className,
	label,
	variant = 'md',
	...inheritedProps
}: ButtonLinkProps): ReactElement {
	const classes = buttonClassNames(variant, className)

	const textClasses = clsx('relative z-10 button-label inline-block')

	return (
		<Link
			aria-label={label}
			{...inheritedProps}
			className={classes}
			role="link"
		>
			<span className={textClasses}>{label}</span>
		</Link>
	)
}

export default ButtonLink
export type { ButtonLinkProps }
