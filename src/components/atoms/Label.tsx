import clsx from 'clsx'

interface LabelProps {
	label: string
	className?: string
}

function Label({ label, className }: LabelProps): JSX.Element {
	const classes = clsx('', className)
	return <p className={classes}>{label}</p>
}

export default Label
export type { LabelProps }
