import { ReactElement } from 'react'
import { MenuLink as MenuLinkType } from '@types'
import clsx from 'clsx'
import MenuLink from '@components/atoms/MenuLink'

type SubMenuProps = {
	menu?: {
		submenuItem?: MenuLinkType[] | null
	}
	className?: string
}

function SubMenu({ menu, className }: SubMenuProps): ReactElement | null {
	const classes = clsx('', className)
	const linkClasses = clsx(
		'relative font-light outline-none group transition-colors duration-300',
		'after:inline-block',
		'after:h-px after:duration-300',
		'after:absolute after:inset-x-0 after:-bottom-0.5',
		'after:bg-left after:bg-0/1 after:bg-gradient-to-r after:bg-no-repeat',
		'after:hover:bg-full',
		'after:from-black after:to-black'
	)
	return menu && menu.submenuItem && menu.submenuItem.length > 0 ? (
		<ul className={classes}>
			{menu.submenuItem.map((submenuItem, index) => {
				return (
					<li key={index}>
						<MenuLink
							className={linkClasses}
							{...submenuItem.link}
							label={submenuItem.link.label}
						/>
					</li>
				)
			})}
		</ul>
	) : null
}

export default SubMenu
