import clsx from 'clsx'
import { ReactElement } from 'react'

interface FieldLabelProps {
	label?: string
	htmlFor: string
	required?: boolean
	className?: string
	hasValue?: boolean
}

function FieldLabel({
	label,
	htmlFor,
	required,
	className,
	hasValue = false,
}: FieldLabelProps): ReactElement {
	const classes = clsx(
		'font-heading text-primary text-body-sm font-extrabold tracking-wider ',
		'absolute left-4 -translate-y-1/2 block bg-white px-2 transition-all duration-400',
		'peer-focus:scale-80 peer-focus:-top-0.5 peer-placeholder-shown:scale-80 peer-placeholder-shown:-top-0.5',
		hasValue ? 'scale-80 -top-0.5' : 'top-1/2',
		className
	)

	return (
		<label className={classes} htmlFor={htmlFor}>
			{label}
			{required && <span className="ml-1 inline-block">*</span>}
		</label>
	)
}

export default FieldLabel
export type { FieldLabelProps }
