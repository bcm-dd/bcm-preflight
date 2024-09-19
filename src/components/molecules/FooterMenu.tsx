import { Menu } from '@types'
import { ReactElement } from 'react'
import Nav from '@components/atoms/Nav'
import { hasSubMenu } from '@helpers/hasSubMenu'
import MenuLink from '@components/atoms/MenuLink'
import FooterSubMenu from '@components/molecules/FooterSubMenu'
import clsx from 'clsx'

type FooterMenuProps = {
	className?: string
	menu: Menu
}

function FooterMenu({ menu, className }: FooterMenuProps): ReactElement {
	const classes = clsx('', className)

	const linkClasses = clsx(
		'relative inline-block outline-none group transition-colors duration-300',
		'after:inline-block',
		'after:h-px after:duration-300',
		'after:absolute after:inset-x-0 after:-bottom-0.5',
		'after:bg-left after:bg-0/1 after:bg-gradient-to-r after:bg-no-repeat',
		'aria-current:after:bg-full',
		'after:hover:bg-full',
		'after:from-current after:to-current'
	)
	return (
		<Nav className={classes}>
			<ul role="menu" className='space-y-4'>
				{menu.menuItem?.map((item, index) => {
					return (
						<li role="presentation" className="space-y-4" key={index}>
							<MenuLink
								{...item.link}
								className={
									hasSubMenu(item.type) ? 'font-heading uppercase text-h6 font-extrabold tablet:text-h6-tablet laptop:text-h6-desktop' : linkClasses
								}
								label={item.link.label}
							/>

							{hasSubMenu(item.type) && <FooterSubMenu menu={item.submenu} />}
						</li>
					)
				})}
			</ul>
		</Nav>
	)
}

export default FooterMenu
export type { FooterMenuProps }
