import { ReactElement } from 'react'
import { MenuLink as MenuLinkType } from '@types'
import { Variants, motion } from 'framer-motion'
import MenuLink from '@components/atoms/MenuLink'
import clsx from 'clsx'

type SubMenuProps = {
	id: string
	open: boolean
	subMenu?: {
		submenuItem?: MenuLinkType[] | null
	}
}

function SubMenu({ id, open, subMenu }: SubMenuProps): ReactElement | null {
	const classes = clsx('tablet-landscape:absolute tablet-landscape:top-20 tablet-landscape:bg-white tablet-landscape:min-w-30')

	const menuItemClasses = clsx('menu-item tablet-landscape:text-body-sm tablet-landscape:first:pt-3 tablet-landscape:last:pb-3 tablet-landscape:px-6')

	const menuLinkClasses = clsx('')

	const variants: Variants = {
		open: {
			height: 'auto',
			overflow: 'unset',
			transition: { staggerChildren: 0.05, delayChildren: 0.15 },
		},
		closed: {
			height: 0,
			overflow: 'hidden',
			transition: {
				delay: 0.2,
				staggerChildren: 0.05,
				staggerDirection: -1,
			},
		},
	}

	const liVariants: Variants = {
		open: {
			y: 0,
			opacity: 1,
			transition: {
				y: { stiffness: 1000, velocity: -100 },
			},
		},
		closed: {
			y: 8,
			opacity: 0,
			transition: {
				y: { stiffness: 1000 },
			},
		},
	}

	return subMenu?.submenuItem?.length ? (
		<motion.div
			className={classes}
			initial={{ height: '0' }}
			animate={open ? 'open' : 'closed'}
			variants={variants}
			transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
		>
			<motion.ul className="space-y-4 pt-4 tablet-landscape:sapce-y-2 tablet-landscape:pt-0">
				{subMenu.submenuItem.map((item, index) => {
					return item.link ? (
						<motion.li
							variants={liVariants}
							className={menuItemClasses}
							key={index}
							role="presentation"
						>
							<MenuLink {...item.link} className={menuLinkClasses} />
						</motion.li>
					) : null
				})}
			</motion.ul>
		</motion.div>
	) : null
}

export default SubMenu
