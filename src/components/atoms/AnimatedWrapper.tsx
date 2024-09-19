import classNames from 'classnames'
import { motion } from 'framer-motion'
import { ReactElement, ReactNode } from 'react'

export type AnimatedWrapperProps = {
	className?: string
	children: ReactNode
	once?: boolean
	threshold?: 'some' | 'all' | number
	rootMargin?: string
}

const AnimatedWrapper = ({
	className,
	children,
	once = true,
	threshold = 0.25,
	rootMargin = '0px',
}: AnimatedWrapperProps): ReactElement => {
	const classes = classNames(className, '')

	return (
		<motion.div
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: once, amount: threshold, margin: rootMargin }}
			className={classes}
		>
			{children}
		</motion.div>
	)
}

export default AnimatedWrapper
