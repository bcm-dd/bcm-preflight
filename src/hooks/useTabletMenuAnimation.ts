import { useAnimate, stagger } from 'framer-motion'
import { useEffect } from 'react'

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 })

function useTabletMenuAnimation(isOpen: boolean) {
	const [scope, animate] = useAnimate()

	useEffect(() => {
		animate(
			'.mobile-menu',

			isOpen
				? {
						clipPath: 'circle(100%)',
						pointerEvents: 'auto',
						visibility: 'visible',
						opacity: 1,
					}
				: {
						clipPath: 'circle(30px at calc(100% - 65px) 65px)',
						pointerEvents: 'none',
						visibility: 'hidden',
						opacity: 0,
					},
			{
				type: 'spring',
				bounce: 0,
				duration: isOpen ? 0.5 : 0.3,
				delay: isOpen ? 0.2 : 1,
			}
		)

		animate(
			'.menu-items > li',
			isOpen
				? {
						y: 0,
						opacity: 1,
					}
				: {
						y: 8,
						opacity: 0,
					},
			{
				duration: 0.2,
				delay: staggerMenuItems,
			}
		)
		animate(
			'.social-media > li',
			isOpen
				? {
						x: 0,
						opacity: 1,
					}
				: {
						x: 16,
						opacity: 0,
					},
			{
				duration: 0.2,
				delay: stagger(0.1, { startDelay: 0.35 }),
			}
		)
	}, [isOpen, animate])

	return scope
}

export default useTabletMenuAnimation
