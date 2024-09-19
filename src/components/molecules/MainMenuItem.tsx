'use client'
import { Fragment, ReactElement, useState, useCallback, useEffect } from 'react'
import { Link } from '@types'
import clsx from 'clsx'
import MenuLink from '@components/atoms/MenuLink'
import { hasSubMenu } from '@helpers/hasSubMenu'
import { usePathname } from 'next/navigation'
import SubMenu from '@components/atoms/SubMenu'
type MainMenuItemProps = {
	menuItem?: {
		type?: ('link' | 'submenu') | null
		label?: string | null
		link?: Link
		submenu?: {
			submenuItem?: MenuLink[] | null
		}
		id?: string | null
	} | null
}

function MainMenuItem({ menuItem }: MainMenuItemProps): ReactElement | null {
	const [menuOpen, setMenuOpen] = useState(false)
	const route = usePathname()

	const toggleSubMenu = useCallback(() => {
		if (window.matchMedia('(pointer: coarse)').matches) {
			return setMenuOpen((open) => !open)
		}
	}, [setMenuOpen])

	const handleMouseEnter = () => {
		if (window.matchMedia('(pointer: coarse)').matches) {
			setMenuOpen(false)
		} else {
			setMenuOpen(true)
		}
	}
	const handleMouseLeave = () => {
		setMenuOpen(false)
	}

	// Close submenu nav on page change
	useEffect(() => {
		const timeout = setTimeout(() => setMenuOpen(false), 50)
		return () => clearTimeout(timeout)
	}, [route, setMenuOpen])

	const linkClasses = clsx(
		'font-heading group text-dark font-extrabold uppercase tracking-wider',
		'relative outline-none group transition-colors duration-300',
		'tablet-landscape:after:inline-block',
		'tablet-landscape:after:h-0.5 tablet-landscape:after:duration-300',
		'tablet-landscape:after:absolute tablet-landscape:after:inset-x-0 tablet-landscape:after:-bottom-0.5',
		'tablet-landscape:after:bg-left tablet-landscape:after:bg-0/1 tablet-landscape:after:bg-gradient-to-r tablet-landscape:after:bg-no-repeat',
		'tablet-landscape:after:hover:bg-full',
		'tablet-landscape:after:from-primary tablet-landscape:after:to-primary',
		'tablet-landscape:aria-current:after:bg-full',
		'tablet-landscape:aria-current:text-accent tablet-landscape:py-2 tablet-landscape:text-body-sm tablet-landscape:hover:text-accent'
	)

	const submenuLinkClasses = clsx(
		'flex items-center justify-between w-full space-x-3',
		linkClasses
	)

	return menuItem ? (
		<li
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			role="presentation"
		>
			{hasSubMenu(menuItem.type) ? (
				<Fragment>
					{menuItem.label && (
						<button
							onClick={toggleSubMenu}
							aria-expanded={menuOpen}
							className={submenuLinkClasses}
							aria-controls={`sub-menu-list`}
							role="button"
						>
							<span>{menuItem.label}</span>
							<span className="relative ml-auto block h-4 w-4 flex-none text-primary tablet-landscape:h-2.5 tablet-landscape:w-2.5">
								<span className="absolute inset-0 m-auto block h-0.5 -rotate-90 bg-current transition-all duration-200 group-aria-expanded:-rotate-180"></span>
								<span className="absolute inset-0 m-auto block h-0.5 rotate-180 bg-current transition-all duration-200 group-aria-expanded:rotate-180"></span>
							</span>
						</button>
					)}
					<SubMenu open={menuOpen} subMenu={menuItem.submenu} />
				</Fragment>
			) : (
				<MenuLink
					{...menuItem.link}
					className={linkClasses}
					label={menuItem.link.label}
				/>
			)}
		</li>
	) : null
}

export default MainMenuItem
export type { MainMenuItemProps }
