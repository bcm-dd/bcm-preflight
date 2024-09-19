import React, { ComponentPropsWithoutRef, ReactElement } from 'react'

import clsx from 'clsx'

type InheritedProps = ComponentPropsWithoutRef<'input'>
type RadioButtonProps = InheritedProps & {
	className?: string
	id: string
	label: string
}

function RadioButton({
	className,
	label,
	id,
	checked,
	...inheritedProps
}: RadioButtonProps): ReactElement {
	const classes = clsx('radio-button sr-only peer', className)
	const labelClasses = clsx(
		'relative cursor-pointer font-light outline-none group transition-colors duration-300',
		'after:inline-block',
		'after:h-px after:duration-300',
		'after:absolute after:inset-x-0 after:-bottom-0.5',
		'after:bg-left after:bg-0/1 after:bg-gradient-to-r after:bg-no-repeat',
		'after:hover:bg-full',
		'after:from-black after:to-black',
		checked ? 'after:bg-full' : '',
		'text-body tablet:text-body-md'
	)
	return (
		<label className={labelClasses}>
			<input type="radio" {...inheritedProps} className={classes} />
			<span className="">{label}</span>
		</label>
	)
}

export default RadioButton
export type { RadioButtonProps }
