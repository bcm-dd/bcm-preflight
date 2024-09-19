import clsx from 'clsx'
import React, { ReactElement } from 'react'

interface FieldErrorProps {
	className?: string
	message?: string | undefined
}

function FieldError({
	message = 'This field is required',
	className,
}: FieldErrorProps): ReactElement {
	const classes = clsx('text-error text-body-xs', className)

	return <div className={classes}>{message}</div>
}

export default FieldError
export type { FieldErrorProps }
