import { ReactElement } from 'react'
import { MainMenu } from '@types'
import clsx from 'clsx'
import MainMenuItem from '@components/molecules/MainMenuItem'
type MainMenuProps = {
	menu: MainMenu
}

function MainMenu({ menu }: MainMenuProps): ReactElement | null {
	const classes = clsx('menu-items flex flex-col gap-5 items-end')

	return menu.menuItem && menu.menuItem.length ? (
		<ul role="menu" className={classes}>
			{menu.menuItem.map((menuItem, index) => (
				<MainMenuItem key={index} menuItem={menuItem} />
			))}
		</ul>
	) : null
}

export default MainMenu
export type { MainMenuProps }
