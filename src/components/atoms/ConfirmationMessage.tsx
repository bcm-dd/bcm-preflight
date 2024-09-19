import clsx from 'clsx'
import React, { ReactElement } from 'react'
import { motion } from 'framer-motion'
import RichText from '@components/atoms/RichText'

interface ConfirmationMessageProps {
	message?: {
		root: {
			children: {
				type: string;
				version: number;
				[k: string]: unknown;
			}[];
			direction: ('ltr' | 'rtl') | null;
			format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
			indent: number;
			type: string;
			version: number;
		};
		[k: string]: unknown;
	} | null
	submissionData?: { field: string; value: unknown }[]
	className?: string
}

function ConfirmationMessage({
	message,
	submissionData,
	className,
}: ConfirmationMessageProps): ReactElement {
	const classes = clsx('confirmation-message', className)

	return (
		<motion.div
			initial={{
				opacity: 0,
				y: 16,
			}}
			animate={{
				y: 0,
				opacity: 1,
				transition: {
					y: { stiffness: 1000, velocity: -100 },
					duration: 0.3,
					delay: 0.2,
				},
			}}
			exit={{
				y: 16,
				opacity: 0,
				transition: {
					y: { stiffness: 1000 },
				},
			}}
			className={classes}
		>
			<RichText content={message} submissionData={submissionData} />
		</motion.div>
	)
}

export default ConfirmationMessage
export type { ConfirmationMessageProps }
