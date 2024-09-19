import { TextAreaField } from '@payloadcms/plugin-form-builder/dist/types'
import clsx from 'clsx'
import React, { ReactElement } from 'react'
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import Field from '@components/atoms/Field'
import FieldError from '@components/atoms/FieldError'
import FieldLabel from '@components/atoms/FieldLabel'

interface TextAreaFieldInputProps extends TextAreaField {
	register: UseFormRegister<FieldValues & any>
	rows?: number
	errors: Partial<
		FieldErrorsImpl<{
			[x: string]: any
		}>
	>
	watch: (
		names?:
			| string
			| string[]
			| ((data: unknown, options: { name: string; type: string }) => void)
	) => unknown
	className?: string
}

function TextAreaFieldInput(fields: TextAreaFieldInputProps): ReactElement {
	const {
		name,
		label,
		width,
		register,
		required: requiredFromProps,
		errors,
		rows = 3,
		className,
		watch,
	} = fields

	const htmlId = `${name}`

	const classes = clsx(
		'w-full bg-transparent transition duration-300 h-30 px-4 border-px border border-grey-100 ring-0 ring-offset-transparent text-dark font-medium peer outline-offset-0 autofill:bg-transparent focus:ring-0 focus:outline-offset-0 focus:outline-0 focus:outline-solid focus:outline-primary focus:border-primary placeholder-shown:outline-primary placeholder-shown:border-primary',
		watch(name) !== '' ? 'border-primary outline-primary' : '',
		className
	)

	return (
		<Field blockType="textarea" width={width ?? 100}>
			<textarea
				rows={rows}
				className={classes}
				{...register(name, { required: requiredFromProps })}
			/>
			{label && (
				<FieldLabel
					label={label}
					htmlFor={htmlId}
					required={requiredFromProps ?? false}
					hasValue={watch(name) !== ''}
				/>
			)}

			{requiredFromProps && errors[name] && <FieldError />}
		</Field>
	)
}

export default TextAreaFieldInput
export type { TextAreaFieldInputProps }
