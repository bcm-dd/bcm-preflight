import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { ButtonHTMLAttributes, ReactElement } from 'react'

type HamburgerProps = Pick<
	ButtonHTMLAttributes<HTMLButtonElement>,
	'onClick'
> & {
	id?: string
	title?: string
	open: boolean
	className?: string
	ariaLabel?: string
}

function Hamburger({
	id,
	title,
	className,
	onClick,
	ariaLabel,
	open = false,
}: HamburgerProps): ReactElement {
	const buttonClasses = clsx(
		'relative flex items-center text-primary size-[0.875rem] space-x-3 group z-90 tablet-landscape:hidden',
		className
	)

	const barClasses = clsx(
		'absolute block w-full h-0.5 bg-current rounded-[1px]'
	)

	return (
		<motion.button
			initial={false}
			animate={open ? 'open' : 'closed'}
			id={id}
			title={title}
			aria-label={ariaLabel ? ariaLabel : title}
			aria-expanded={open}
			tabIndex={0}
			type="button"
			className={buttonClasses}
			onClick={onClick}
			role="button"
		>
			<span className="relative block h-2.5 w-4">
				<motion.span
					initial={{
						top: 0,
						rotate: 0,
						opacity: 1,
					}}
					variants={{
						open: {
							top: '4px',
							rotate: 45,
							transition: {
								delay: 0.1,
							},
							opacity: 1,
						},
						closed: {
							top: 0,
							rotate: 0,
							opacity: 1,
							transition: {
								delay: 0.6,
							},
						},
					}}
					transition={{ duration: 0.2 }}
					className={barClasses}
				/>
				<motion.span
					initial={{
						bottom: 0,
						rotate: 0,
						opacity: 1,
					}}
					variants={{
						open: {
							bottom: '4px',
							rotate: -45,
							transition: {
								delay: 0.1,
							},
							opacity: 1,
						},
						closed: {
							bottom: 0,
							rotate: 0,
							opacity: 1,
							transition: {
								delay: 0.6,
							},
						},
					}}
					transition={{ duration: 0.2 }}
					className={barClasses}
				/>
			</span>
		</motion.button>
	)
}

export default Hamburger
export type { HamburgerProps }
