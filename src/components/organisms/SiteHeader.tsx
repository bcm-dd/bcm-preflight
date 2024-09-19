'use client'
import { Contact, Header } from '@types'
import clsx from 'clsx'
import { Fragment, ReactElement, useCallback, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'
import Logo from '@components/atoms/Logo'
import MobileNavigation from '@components/organisms/MobileNavigation'
import MenuIcon from '@components/atoms/MenuIcon'

type SiteHeaderProps = {
	header: Header
	contact: Contact
}

function SiteHeader({ header, contact }: SiteHeaderProps): ReactElement {
	const route = usePathname()
	const { mainMenu } = header
	/**
	 * Handle toggling mobile navigation
	 */
	const [burgerOpen, setBurgerOpen] = useState(false)

	const toggleBurger = useCallback(
		() => setBurgerOpen((open) => !open),
		[setBurgerOpen]
	)

	// Close mobile nav on page change
	useEffect(() => {
		const timeout = setTimeout(() => setBurgerOpen(false), 50)
		return () => clearTimeout(timeout)
	}, [route, setBurgerOpen])

	useEffect(() => {
		if (burgerOpen) {
			document.body.classList.add('h-screen', 'overflow-hidden')
		} else {
			document.body.classList.remove('h-screen', 'overflow-hidden')
		}
	}, [burgerOpen])

	//
	const classes = clsx(
		'site-header flex flex-row items-center z-90 sticky top-0 bg-white py-5'
	)

	return (
		<AnimatePresence>
			<Fragment>
				<header id="site-header" className={classes}>
					<div className="flex w-full flex-row items-center justify-between">
						<Logo className="text-dark" />
						<div className="flex flex-row items-center justify-end space-x-4 tablet-landscape:justify-start tablet-landscape:space-x-6 laptop:space-x-10">
							{mainMenu &&
								mainMenu.menuItem &&
								mainMenu.menuItem.length > 0 && (
									<MenuIcon onToggle={toggleBurger} open={burgerOpen} />
								)}
						</div>
					</div>
				</header>
				{mainMenu && mainMenu.menuItem && (
					<MobileNavigation menu={mainMenu} open={burgerOpen} />
				)}
			</Fragment>
		</AnimatePresence>
	)
}

export default SiteHeader
export type { SiteHeaderProps }
