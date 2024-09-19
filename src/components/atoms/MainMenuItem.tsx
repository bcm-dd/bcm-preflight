import clsx from 'clsx'
import { Link, MenuLink as MenuLinkType } from '@types'
import { ReactElement } from 'react'
import MenuLink from '@components/atoms/MenuLink'
import { motion } from 'framer-motion'

type MainMenuItemProps = {
	type?: ('link' | 'submenu') | null
	label?: string | null
	link?: Link
	submenu?: {
		submenuItem?: MenuLinkType[] | null
	}
	id?: string | null

	className?: string
}

function MainMenuItem({
	type,
	label,
	link,
}: MainMenuItemProps): ReactElement | null {
	const hasSubMenu = (type?: ('link' | 'submenu') | null): boolean => {
		return type === 'submenu'
	}

	const classes = clsx('')

	const linkClasses = clsx(
		'font-black uppercase leading-none tracking-wide text-[3rem] tablet:text-[6rem] tablet-landscape:text-[6rem] laptop:text-[4rem] desktop:text-[6rem]'
	)

	return (
		<motion.li role="menuitem" className={classes}>
			{!hasSubMenu(type) && link ? (
				<MenuLink
					{...link}
					className={linkClasses}
					label={label ?? link.label}
				/>
			) : null}
		</motion.li>
	)
}

export default MainMenuItem
export type { MainMenuItemProps }
