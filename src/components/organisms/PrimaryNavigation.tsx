import Nav from '@components/atoms/Nav'
import { ReactElement } from 'react'
import { MainMenu as MainMenuType, SocialMedia } from '@types'
import clsx from 'clsx'
import MainMenu from '@components/molecules/MainMenu'
import SocialMediaGroup from '@components/molecules/SocialMediaGroup'

type PrimaryNavigationProps = {
	menu: MainMenuType
	className?: string
	socialMedia?: SocialMedia
}

function PrimaryNavigation({
	menu,
	socialMedia,
	className,
}: PrimaryNavigationProps): ReactElement | null {
	const classes = clsx('space-y-16', className)

	return menu.menuItem && menu.menuItem.length ? (
		<div className={classes}>
			<Nav ariaLabel="primary-menu" id="primary-menu">
				<MainMenu menu={menu} />
			</Nav>
			{socialMedia && (
				<div className="tablet-landscape:hidden">
					<SocialMediaGroup socialLinks={socialMedia.socialLinks} />
				</div>
			)}
		</div>
	) : null
}

export default PrimaryNavigation
export type { PrimaryNavigationProps }
