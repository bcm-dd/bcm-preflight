import classNames from 'classnames'
import { MouseEventHandler, ReactElement } from 'react'
import Heading from '@components/atoms/Heading'

type AccordionHeaderProps = {
	title: string
	expanded: boolean
	htmlId: string
	panelId: string
	onClick: MouseEventHandler<HTMLButtonElement>
}

function AccordionHeader({
	title,
	expanded = false,
	htmlId,
	panelId,
	onClick,
}: AccordionHeaderProps): ReactElement {
	const classes = classNames('accordion-trigger bg-dark-100 w-full px-6 py-4 transition-all duration-300 outline-1 focus:outline-solid focus:outline-dark-200', expanded ? '' : '')
	return (
		<button
			type="button"
			aria-expanded={expanded}
			className={classes}
			aria-controls={panelId}
			onClick={onClick}
			id={`accordion-header-${htmlId}`}
		>
			<span className="accordion-title flex items-center justify-between space-x-4">
				<Heading className="uppercase font-extrabold" level="h6">
					{title}
				</Heading>
								<div
									className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white tablet:h-8 tablet:w-8">
					<div className="text-secondary relative h-3 w-3 flex-none tablet:h-4 tablet:w-4">
						<div
							className={`absolute inset-0 m-auto h-0.5 bg-current transition-all duration-300 ${
								expanded ? 'rotate-0' : 'rotate-90'
							}`}
						/>
						<div
							className={`absolute inset-0 m-auto h-0.5 bg-current transition-all duration-300 ${
								expanded ? 'rotate-0' : 'rotate-180'
							}`}
						/>
					</div>
				</div>
			</span>
		</button>
	)
}

export default AccordionHeader
export type { AccordionHeaderProps }
