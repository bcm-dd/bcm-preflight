import { CountryField as CountryFieldType } from '@payloadcms/plugin-form-builder/dist/types'
import React, { ReactElement } from 'react'
import {
	Control,
	Controller,
	FieldErrorsImpl,
	FieldValues,
} from 'react-hook-form'
import ReactSelect from 'react-select'

import Field from '@components/atoms/Field'
import FieldLabel from '@components/atoms/FieldLabel'

import { countryOptions } from '@helpers/countryOptions'
import clsx from 'clsx'

interface CountryFieldProps extends CountryFieldType {
	control: Control<FieldValues, any>
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

function CountryField(field: CountryFieldProps): ReactElement {
	const { name, label, width, control, required, errors, watch } = field

	const htmlId = `${name}`

	const classes = clsx(
		'w-full bg-transparent transition duration-300 h-12 px-4 border-px border border-grey-100 ring-0 !rounded-none ring-offset-transparent text-dark font-medium peer outline-offset-0 !shadow-none autofill:bg-transparent focus:ring-0 focus:outline-offset-0 focus:outline-1 focus:outline-solid focus:outline-primary focus:border-primary placeholder-shown:outline-primary placeholder-shown:border-primary',
		watch(name) !== undefined ? '!border-primary !outline-primary' : ''
	)

	return (
		<Field blockType="country" width={width ?? 100}>
			<Controller
				control={control}
				rules={{ required }}
				name={name}
				defaultValue=""
				render={({ field: { onChange, value } }) => (
					<ReactSelect
						instanceId={name}
						options={countryOptions}
						value={countryOptions.find((c) => c.value === value)}
						onChange={(val) => onChange(val?.value)}
						className=""
						classNames={{
							control: () => classes,
							dropdownIndicator: () => '!pr-0 !text-primary',
							// indicatorsContainer: () => '!text-primary',
							indicatorSeparator: () => '!w-0',
							menu: () => '!z-40',
							// option: () => 'bg-primary',
							valueContainer: () => '!px-0',
						}}
						classNamePrefix="rs"
					/>
				)}
			/>
			{label && (
				<FieldLabel
					label={label}
					htmlFor={htmlId}
					required={required ?? false}
					hasValue={watch(name) !== undefined}
				/>
			)}
		</Field>
	)
}

export default CountryField
export type { CountryFieldProps }
