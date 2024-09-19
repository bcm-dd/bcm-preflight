import { EmailField as EmailFieldType } from '@payloadcms/plugin-form-builder/dist/types'
import clsx from 'clsx'
import React, { ReactElement } from 'react'
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import Field from '@components/atoms/Field'
import FieldError from '@components/atoms/FieldError'
import FieldLabel from '@components/atoms/FieldLabel'

interface EmailFieldProps extends EmailFieldType {
	className?: string
	register: UseFormRegister<FieldValues & any>
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

function EmailField(fields: EmailFieldProps): ReactElement {
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

	const htmlId = `${name}`

	const classes = clsx(
		'w-full bg-transparent transition duration-300 h-12 px-4 border-px border border-grey-100 ring-0 ring-offset-transparent text-dark font-medium peer outline-offset-0 autofill:bg-white focus:ring-0 focus:outline-offset-0 focus:outline-0 focus:outline-solid focus:outline-primary focus:border-primary placeholder-shown:outline-primary placeholder-shown:border-primary',
		watch(name) !== '' ? 'border-primary outline-primary' : '',
		className
	)
	return (
		<Field blockType="email" width={width ?? 100}>
			<input
				type="text"
				id={htmlId}
				placeholder="jane.doe@example.com.au"
				className={classes}
				{...register(name, {
					required: requiredFromProps ?? false,
					pattern: /^\S+@\S+$/i,
				})}
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

export default EmailField
export type { EmailFieldProps }
