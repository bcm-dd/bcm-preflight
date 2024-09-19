import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'

import Heading from '@components/atoms/Heading'

interface WidgetProps {
	title?: string
	children?: ReactNode
	className?: string
}

function Widget({ title, children, className }: WidgetProps): ReactElement {
	const classes = classNames('space-y-4', className)

	return (
		<div className={classes}>
			{title && (
				<Heading level="h6" className="font-extrabold">
					{title}
				</Heading>
			)}

			{children}
		</div>
	)
}

export default Widget
export type { WidgetProps }
