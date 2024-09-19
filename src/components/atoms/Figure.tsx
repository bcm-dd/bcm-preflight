import clsx from 'clsx'
import { ReactElement, ReactNode } from 'react'

type FigureProps = {
	id?: string
	className?: string
	children?: ReactNode
	caption?: string
}

function Figure({
	id,
	className,
	children,
	caption,
}: FigureProps): ReactElement {
	const figureClasses = clsx('figure', className)

	return (
		<figure id={id} className={figureClasses} role="figure">
			{children}
			{caption && <figcaption>{caption}</figcaption>}
		</figure>
	)
}

export default Figure
export type { FigureProps }
