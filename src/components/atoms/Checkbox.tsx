import { CheckboxField } from '@payloadcms/plugin-form-builder/dist/types'
import React, { ReactElement, useState } from 'react'
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import Field from '@components/atoms/Field'
import FieldError from '@components/atoms/FieldError'
import FieldLabel from '@components/atoms/FieldLabel'
import Icon from '@mdi/react'
import { mdiCheck } from '@mdi/js'

interface CheckboxProps extends CheckboxField {
	register: UseFormRegister<FieldValues & any>
	setValue: any
	getValues: any
	errors: Partial<
		FieldErrorsImpl<{
			[x: string]: any
		}>
	>
}

function Checkbox(fields: CheckboxProps): ReactElement {
	const {
		name,
		label,
		width,
		register,
		setValue,
		getValues,
		required: requiredFromProps,
		errors,
	} = fields

	const htmlId = `${name}`

	const [checked, setChecked] = useState(false)

	const isCheckboxChecked = getValues(name)

	return (
		<Field blockType="checkbox" width={width ?? 100}>
			{label && (
				<FieldLabel
					label={label}
					htmlFor={htmlId}
					required={requiredFromProps ?? false}
				/>
			)}
			<input
				type="checkbox"
				{...register(name, { required: requiredFromProps })}
				checked={isCheckboxChecked}
			/>
			<button
				type="button"
				onClick={() => {
					setValue(name, !checked)
					setChecked(!checked)
				}}
			>
				<span>
					<Icon path={mdiCheck} size={1} />
				</span>
			</button>
			{requiredFromProps && errors[name] && !checked && <FieldError />}
		</Field>
	)
}

export default Checkbox
export type { CheckboxProps }
