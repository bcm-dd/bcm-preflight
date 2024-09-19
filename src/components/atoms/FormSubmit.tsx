import clsx from 'clsx'
import React, { ReactElement } from 'react'

import Button from '@components/atoms/Button'

interface FormSubmitProps {
	className?: string
	label?: string | null
	isSubmitting?: boolean
}

function FormSubmit({
	label,
	className,
	isSubmitting = false,
}: FormSubmitProps): ReactElement {
	const classes = clsx('col-span-full', className)

	return (
		<footer className={classes}>
			<Button
				type="submit"
				variant="primary-outline"
				label={isSubmitting ? 'Sending...' : label ?? 'Send'}
			/>
		</footer>
	)
}

export default FormSubmit
export type { FormSubmitProps }
