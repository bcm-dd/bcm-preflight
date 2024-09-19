import clsx from 'clsx'
import { ReactNode } from 'react'

interface FieldProps {
	children: ReactNode
	blockType: string
	width: number
	className?: string
}

const getColumns = (width: number): string => {
	switch (width) {
		case 50:
			return 'tablet:col-span-2'
		case 25:
			return 'tablet:col-span-2 laptop:col-span-1'
		default:
			return 'tablet:col-span-full'
	}
}

function Field({
	children,
	blockType,
	className,
	width,
}: FieldProps): JSX.Element {
	const classes = clsx(
		`relative col-span-full field field-${blockType.toLowerCase()}`,
		getColumns(Number(width)),
		className
	)

	return <div className={classes}>{children}</div>
}

export default Field
export type { FieldProps }
