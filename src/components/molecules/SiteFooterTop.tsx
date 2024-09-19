import { ContactDetails, Menu, SocialMedia } from '@types'
import { ReactElement } from 'react'
import clsx from 'clsx'
import Grid from '@components/atoms/Grid'
import Widget from '@components/atoms/Widget'
import FooterMenu from '@components/molecules/FooterMenu'
import RichText from '@components/atoms/RichText'
import { formatPhoneNumber } from '@helpers/formatPhoneNumber'
import Link from 'next/link'
import TextLink from '@components/atoms/TextLink'
import SocialMediaGroup from '@components/molecules/SocialMediaGroup'
import Logo from '@components/atoms/Logo'

type SiteFooterTopProps = {
	contactDetails?: ContactDetails
	socialMedia?: SocialMedia
	footerRichText?: {
		root: {
			children: {
				type: string
				version: number
				[k: string]: unknown
			}[]
			direction: ('ltr' | 'rtl') | null
			format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
			indent: number
			type: string
			version: number
		}
		[k: string]: unknown
	} | null
	footerMenu?: Menu
}

function SiteFooterTop({
	contactDetails,
	footerMenu,
	footerRichText,
	socialMedia,
}: SiteFooterTopProps): ReactElement {
	const classes = clsx('site-footer__top')

	return (
		<div className={classes}>
			<Grid>
				<div className="order-1 col-span-full flex flex-col gap-4 tablet-landscape:col-span-10 tablet-landscape:gap-6 desktop:col-span-2">
					<Logo className="text-dark" />
					{footerRichText && <RichText content={footerRichText} />}
					{socialMedia && <SocialMediaGroup {...socialMedia} />}
				</div>
				{contactDetails && (
					<div className="order-4 col-span-full grid gap-4 gap-y-6 mobile:grid-cols-2 mobile:gap-8 tablet-landscape:order-2 tablet-landscape:col-span-4 tablet-landscape:flex desktop:col-span-4">
						{contactDetails.location && (
							<Widget title="Locations">
								<RichText
									content={contactDetails.location}
									className="flex gap-8 !space-y-0"
								/>
							</Widget>
						)}
						<div className="space-y-4">
							{contactDetails.contactPhone && (
								<Widget title="Phone">
									<TextLink
										href={`tel:${contactDetails.contactPhone.replace(' ', '')}`}
										aria-label={formatPhoneNumber(contactDetails.contactPhone)}
									>
										{contactDetails.contactPhone}
									</TextLink>
								</Widget>
							)}
							{contactDetails.primaryEmail && (
								<Widget title="Email" className="mobile:col-span-full">
									<TextLink
										href={`mailto:${contactDetails.primaryEmail})}`}
										aria-label={contactDetails.primaryEmail}
									>
										{contactDetails.primaryEmail}
									</TextLink>
								</Widget>
							)}
						</div>
					</div>
				)}
				{footerMenu && (
					<div className="order-2 col-span-full tablet-landscape:order-2 tablet-landscape:col-span-4 desktop:col-span-3">
						<Widget title="Explore" className="mobile:col-span-full">
							<FooterMenu menu={footerMenu} />
						</Widget>
					</div>
				)}
				{contactDetails && contactDetails.businessHours && (
					<div className="order-3 col-span-full tablet-landscape:order-4 tablet-landscape:col-span-4 desktop:col-span-3"></div>
				)}
			</Grid>
		</div>
	)
}

export default SiteFooterTop
export type { SiteFooterTopProps }
