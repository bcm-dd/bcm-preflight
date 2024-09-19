import { Menu } from '@types'
import { ReactElement } from 'react'
import Nav from '@components/atoms/Nav'
import { hasSubMenu } from '@helpers/hasSubMenu'
import MenuLink from '@components/atoms/MenuLink'
import clsx from 'clsx'

type LegalsFooterMenuProps = {
	menu: Menu
}

function LegalsFooterMenu({ menu }: LegalsFooterMenuProps): ReactElement {
	const linkClasses = clsx(
		'relative font-normal outline-none group transition-colors duration-300',
		'after:inline-block',
		'after:h-px after:duration-300',
		'after:absolute after:inset-x-0 after:-bottom-0.5',
		'after:bg-left after:bg-0/1 after:bg-gradient-to-r after:bg-no-repeat',
		'after:hover:bg-full',
		'after:from-black after:to-black'
	)

	return (
		<Nav>
			<ul role="menu">
				{menu.menuItem?.map((item, index) => {
					return (
						<li role="presentation" key={index}>
							<MenuLink
								{...item.link}
								className={linkClasses}
								label={item.link.label}
							/>
							{hasSubMenu(item.type) && <div></div>}
						</li>
					)
				})}
			</ul>
		</Nav>
	)
}

export default LegalsFooterMenu
export type { LegalsFooterMenuProps }
