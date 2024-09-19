import { ContactDetails, Menu } from '@types'
import { ReactElement } from 'react'
import clsx from 'clsx'
import FooterMenu from '@components/molecules/FooterMenu'

type SiteFooterBottomProps = {
	contactDetails?: ContactDetails
	footerMenu?: Menu
}

function SiteFooterBottom({
	contactDetails,
	footerMenu,
}: SiteFooterBottomProps): ReactElement {
	const year = new Date().getFullYear()

	const classes = clsx(
		'site-footer__bottom flex flex-col pt-6 gap-4 border-t border-solid border-current text-body-sm tablet:gap-8 tablet:flex-row tablet:justify-between  tablet:pt-8'
	)
	return (
		<div className={classes}>
			{contactDetails &&
				(contactDetails.businessABN || contactDetails.businessName) && (
					<div className="order-2 flex flex-row items-start space-x-4 tablet:order-1">
						{contactDetails.businessName && (
							<p>
								© {year} {contactDetails.businessName}
							</p>
						)}
						{contactDetails.businessABN && contactDetails.businessName && (
							<span>|</span>
						)}
						{contactDetails.businessABN && (
							<p>ABN: {contactDetails.businessABN}</p>
						)}
						<p className="max-w-2xl leading-tight">
							<small>
								BCM Group acknowledges the Traditional Custodians of the land on
								which we work and live, and recognise their continuing
								connection to land, water and community. We also pay our
								respects to Elders past, present and emerging.
							</small>
						</p>
					</div>
				)}
			{footerMenu && (
				<FooterMenu className="order-1 tablet:order-2" menu={footerMenu} />
			)}
		</div>
	)
}

export default SiteFooterBottom
export type { SiteFooterBottomProps }
