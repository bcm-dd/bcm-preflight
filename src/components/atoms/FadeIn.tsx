import classNames from 'classnames'
import { Variants, motion } from 'framer-motion'
import { ReactElement, ReactNode } from 'react'

export type FadeInProps = {
	delay?: number
	duration?: number
	x?: number
	y?: number
	className?: string
	children: ReactNode
}

const FadeIn = ({
	delay = 0.2,
	duration = 0.3,
	y = 16,
	x = 0,
	className,
	children,
}: FadeInProps): ReactElement => {
	const classes = classNames(className, 'block')

	const variants: Variants = {
		offscreen: {
			y: y,
			x: x,
			opacity: 0,
			transition: {
				y: { stiffness: 1000 },
			},
		},
		onscreen: {
			y: 0,
			x: 0,
			opacity: 1,
			transition: {
				y: { stiffness: 1000, velocity: -100 },
				duration: duration,
				delay: delay,
			},
		},
	}

	return (
		<motion.span
			initial={{
				y: y,
				x: x,
				opacity: 0,
			}}
			className={classes}
			variants={variants}
		>
			{children}
		</motion.span>
	)
}

export default FadeIn
