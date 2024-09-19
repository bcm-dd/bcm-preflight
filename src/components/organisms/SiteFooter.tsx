'use client'
import { Contact, Footer } from '@types'
import clsx from 'clsx'
import { ReactElement } from 'react'

import { motion } from 'framer-motion'
import SiteFooterBottom from '@components/molecules/SiteFooterBottom'
import SiteFooterTop from '@components/molecules/SiteFooterTop'

type SiteFooterProps = {
	contact: Contact
	footer: Footer
}

function SiteFooter({ footer, contact }: SiteFooterProps): ReactElement {
	const { socialMedia, contactDetails } = contact
	const { footerMenu, footerRichText, legalsMenu } = footer

	const classes = clsx(
		'site-footer text-dark pb-4 pt-16 space-y-16 tablet:pb-6 tablet-landscape:pt-18 tablet-landscape:space-y-18 desktop:pt-20 desktop:space-y-20'
	)

	return (
		<motion.footer
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.25, margin: '0px' }}
			className={classes}
		>
			<SiteFooterTop
				footerRichText={footerRichText}
				footerMenu={footerMenu}
				socialMedia={socialMedia}
				contactDetails={contactDetails}
			/>
			{(contactDetails || legalsMenu) && (
				<SiteFooterBottom
					contactDetails={contactDetails}
					footerMenu={legalsMenu}
				/>
			)}
		</motion.footer>
	)
}

export default SiteFooter
export type { SiteFooterProps }
