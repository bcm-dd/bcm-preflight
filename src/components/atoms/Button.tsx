import React, { ComponentPropsWithoutRef, ReactElement } from 'react'

import {
	buttonClassNames,
	ButtonLinkVariant,
} from '@components/atoms/ButtonLink'
import clsx from 'clsx'

type InheritedProps = ComponentPropsWithoutRef<'button'>
type ButtonProps = InheritedProps & {
	className?: string
	label?: string
	variant?: ButtonLinkVariant
	downloadButton?: boolean
}

function Button({
	className,
	label,
	variant = 'primary',
	...inheritedProps
}: ButtonProps): ReactElement {
	const classes = buttonClassNames(variant, className)

	const textClasses = clsx('relative z-0 z-10 button-label inline-block')

	return (
		<button {...inheritedProps} className={classes}>
			<span className={textClasses}>{label}</span>
		</button>
	)
}

export default Button
export type { ButtonProps }
