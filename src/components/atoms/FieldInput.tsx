import React, { ReactElement } from 'react'
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'
import clsx from 'clsx'

type FieldInputProps = {
	name: string
	label?: string
	register: UseFormRegister<FieldValues & any>
	required?: boolean
	className?: string
	errors: Partial<
		FieldErrorsImpl<{
			[x: string]: any
		}>
	>
}

function FieldInput(fields: FieldInputProps): ReactElement {
	const {
		name,
		register,
		required: requiredFromProps,
		errors,
		className,
	} = fields

	const classes = clsx(className)

	const htmlId = `${name}`

	return (
		<input
			type="text"
			id={htmlId}
			className={classes}
			{...register(name, { required: requiredFromProps ?? false })}
		/>
	)
}

export default FieldInput
export type { FieldInputProps }
