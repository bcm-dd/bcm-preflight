import { AnimatePresence, motion } from 'framer-motion'
import {
	ReactElement,
	ReactNode,
	SetStateAction,
	useEffect,
	useState,
} from 'react'

import AccordionHeader from '@components/atoms/AccordionHeader'
import AccordionPanel from '@components/atoms/AccordionPanel'
import clsx from 'clsx'

type AccordionProps = {
	title: string
	htmlId: string
	panelId: string
	className?: string
	isOpen?: SetStateAction<boolean>
	children?: ReactNode
}

function Accordion({
	title,
	className,
	htmlId,
	panelId,
	isOpen,
	children,
}: AccordionProps): ReactElement {
	const [open, setOpen] = useState<boolean>(false)

	const accordionClasses = clsx(
		'accordion',
		className
	)

	const handleClick = () => {
		setOpen(!open)
	}

	useEffect(() => {
		setOpen(isOpen ?? false)
	}, [isOpen])

	return (
		<div className={accordionClasses}>
			<AccordionHeader
				title={title}
				expanded={open}
				htmlId={htmlId}
				panelId={panelId}
				onClick={handleClick}
			/>
			<AnimatePresence initial={false}>
				<AccordionPanel buttonId={htmlId} htmlId={panelId} hidden={open}>
					{
						<motion.div
							className="overflow-hidden"
							initial={{ height: 0 }}
							animate={{ height: open ? 'auto' : 0 }}
							transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
						>
							<div className="px-6 py-8">
								{children}
							</div>
						</motion.div>
					}
				</AccordionPanel>
			</AnimatePresence>
		</div>
	)
}

export default Accordion
export type { AccordionProps }
