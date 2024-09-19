import { useAnimate, stagger } from 'framer-motion'
import { useEffect } from 'react'

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 })

function useMenuAnimation(isOpen: boolean) {
	const [scope, animate] = useAnimate()

	useEffect(() => {
		animate(
			'.fullscreen-menu',

			isOpen
				? {
						pointerEvents: 'auto',
						visibility: 'visible',
						opacity: 1,
					}
				: {
						pointerEvents: 'none',
						visibility: 'hidden',
						opacity: 0,
					},
			{
				type: 'spring',
				bounce: 0,
				duration: isOpen ? 0.5 : 0.5,
				delay: isOpen ? 0 : 1.15,
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
			'.contact-details header',
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
				delay: 0.5,
			}
		)

		animate(
			'.contact-details hr',
			isOpen
				? {
						width: '100%',
					}
				: {
						width: 0,
					},
			{
				duration: 0.2,
				delay: 0.7,
			}
		)

		animate(
			'.contact-details li',
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
				delay: stagger(0.1, { startDelay: 0.55 }),
			}
		)
	}, [isOpen, animate])

	return scope
}

export default useMenuAnimation
