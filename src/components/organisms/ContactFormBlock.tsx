import {
	ContactDetails,
	ContactFormBlock as ContactFormBlockType,
} from '@types'
import { ReactElement, useEffect, useState } from 'react'
import Section from '@components/atoms/Section'
import clsx from 'clsx'
import Grid from '@components/atoms/Grid'
import { fetchGlobals } from '@graphql'
import Widget from '@components/atoms/Widget'
import { formatPhoneNumber } from '@helpers/formatPhoneNumber'
import TextLink from '@components/atoms/TextLink'
import dynamic from 'next/dynamic'
import RichText from '@components/atoms/RichText'

const GoogleMap = dynamic(() => import('@components/atoms/GoogleMap'))
const PayloadForm = dynamic(() => import('@form'))

type ContactFormBlockProps = ContactFormBlockType & {
	className?: string
}

function ContactFormBlock({
	blockType,
	contactFormBlockFields,
	className,
}: ContactFormBlockProps): ReactElement | null {
	const [contact, setContact] = useState<ContactDetails | undefined>(undefined)

	useEffect(() => {
		const fetchContact = async () => {
			const req = await fetchGlobals()
			const res = await req?.contact.contactDetails
			setContact(res)
		}

		fetchContact() // make sure to catch any error
			.catch(console.error)
	}, [])

	if (!contactFormBlockFields) return null
	const { anchorId, showContactInfo, showGoogleMap, payloadForm, richText } =
		contactFormBlockFields

	const classes = clsx(
		blockType,
		'space-y-12 tablet-landscape:space-y-14 laptop:space-y-16',
		className
	)

	return (
		<Section className={classes} htmlId={anchorId}>
			<Grid>
				{showContactInfo === 'yes' && (
					<div className="col-span-full space-y-4 tablet:space-y-6 tablet-landscape:col-span-4 laptop:col-span-3">
						{contact?.location && (
							<Widget className="text-accent" title="Location">
								<RichText className="text-dark" content={contact.location} />
							</Widget>
						)}

						{contact?.businessHours && contact.businessHours.length > 0 && (
							<Widget className="text-accent" title="Opening hours">
								<ul className="space-y-3 text-dark">
									{contact.businessHours.map((businessHour, index) => {
										return (
											<li key={index}>
												<strong className="font-bold">
													{businessHour.dayOfWeek}
												</strong>{' '}
												{businessHour.openingHours}
											</li>
										)
									})}
								</ul>
							</Widget>
						)}

						{contact?.contactPhone && (
							<Widget className="text-accent" title="Phone">
								<TextLink
									href={`tel:${contact.contactPhone.replace(' ', '')}`}
									className="text-dark"
									aria-label={formatPhoneNumber(contact.contactPhone)}
								>
									{contact.contactPhone}
								</TextLink>
							</Widget>
						)}
						{contact?.primaryEmail && (
							<Widget className="text-accent" title="Email">
								<TextLink
									href={`mailto:${contact.primaryEmail}`}
									className="text-dark"
									aria-label={contact.primaryEmail}
								>
									{contact.primaryEmail}
								</TextLink>
							</Widget>
						)}
					</div>
				)}
				<div className="col-span-full space-y-4 tablet:space-y-6 tablet-landscape:col-span-7 tablet-landscape:col-start-6 laptop:col-span-6 laptop:col-start-5">
					{richText && <RichText content={richText} />}

					{payloadForm && typeof payloadForm !== 'string' && (
						<PayloadForm form={payloadForm} />
					)}
				</div>
			</Grid>
			{showGoogleMap === 'yes' && (
				<div>
					<GoogleMap {...contact} />
				</div>
			)}
		</Section>
	)
}

export default ContactFormBlock
