import { TextField as TextFieldType } from '@payloadcms/plugin-form-builder/dist/types'
import clsx from 'clsx'
import React, { ReactElement, useState } from 'react'
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import Field from '@components/atoms/Field'
import FieldError from '@components/atoms/FieldError'
import FieldLabel from '@components/atoms/FieldLabel'

interface TextFieldProps extends TextFieldType {
	register: UseFormRegister<FieldValues & any>
	className?: string
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
}

function TextField(fields: TextFieldProps): ReactElement {
	const {
		name,
		label,
		width,
		register,
		required: requiredFromProps,
		errors,
		className,
		watch,
	} = fields

	const classes = clsx(
		'w-full bg-transparent transition duration-300 h-12 px-4 border-px border border-grey-100 ring-0 ring-offset-transparent text-dark font-medium peer outline-offset-0 autofill:!bg-transparent focus:ring-0 focus:outline-offset-0 focus:outline-0 focus:outline-solid focus:outline-primary focus:border-primary placeholder-shown:outline-primary placeholder-shown:border-primary',
		watch(name) !== '' ? 'border-primary outline-primary' : '',
		className
	)

	const htmlId = `${name}`

	return (
		<Field blockType="text" width={width ?? 100}>
			<input
				type="text"
				id={htmlId}
				className={classes}
				{...register(name, { required: requiredFromProps ?? false })}
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

export default TextField
export type { TextFieldProps }
