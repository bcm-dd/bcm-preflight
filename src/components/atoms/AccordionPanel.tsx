import { ReactElement, ReactNode } from 'react'
import clsx from 'clsx'

type AccordionPanelProps = {
	buttonId: string
	htmlId: string
	children?: ReactNode
	hidden: boolean
	className?: string
}

function AccordionPanel({
	buttonId,
	htmlId,
	children,
	hidden = true,
	className,
}: AccordionPanelProps): ReactElement {
	const classes = clsx('accordion-panel', className)
	return (
		<div
			id={`accordion-panel-${htmlId}`}
			role="region"
			aria-labelledby={buttonId}
			className={classes}
			aria-hidden={hidden}
		>
			{children}
		</div>
	)
}

export default AccordionPanel
export type { AccordionPanelProps }
