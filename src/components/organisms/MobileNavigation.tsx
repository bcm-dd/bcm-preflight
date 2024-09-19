'use client'

import Nav from '@components/atoms/Nav'
import { ReactElement } from 'react'
import { MainMenu as MainMenuType } from '@types'
import clsx from 'clsx'
import MainMenu from '@components/molecules/MainMenu'
import useMobileMenuAnimation from '@hooks/useMobileMenuAnimation'

type MobileNavigationProps = {
	menu: MainMenuType
	className?: string
	open: boolean
}

function MobileNavigation({
	menu,
	className,
	open = false,
}: MobileNavigationProps): ReactElement | null {
	const classes = clsx(
		'mobile-menu fixed right-5 z-80 bg-white flex flex-col p-5',
		className
	)

	const scope = useMobileMenuAnimation(open)

	return menu.menuItem && menu.menuItem.length ? (
		<div ref={scope}>
			{' '}
			<div
				className={classes}
				style={{
					clipPath: 'circle(30px at calc(100% - 65px) 65px)',
					pointerEvents: 'none',
					visibility: 'hidden',
					opacity: 0,
				}}
			>
				<Nav ariaLabel="primary-menu" id="primary-menu">
					<MainMenu menu={menu} />
				</Nav>
			</div>
		</div>
	) : null
}

export default MobileNavigation
export type { MobileNavigationProps }
