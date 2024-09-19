import React, { ReactElement } from 'react'

import Grid from '@components/atoms/Grid'
import RichText from '@components/atoms/RichText'
import Accordion from '@components/molecules/Accordion'


import clsx from 'clsx'
import { Tab } from '@components/organisms/TabsBlock'
import slugify from '@utilities/slugify'
import Media from '@components/atoms/Media'

type TabPanelProps = Tab & {
	className?: string
}

function TabPanel({richText, accordions, media, className }: TabPanelProps): ReactElement {

	const classes = clsx('pt-8 tablet:pt-10 laptop:pt-12', className)

	return (
		<div className={classes}>
			<Grid>
				<div className="col-span-full space-y-4 tablet:space-y-6 tablet-landscape:col-span-6 laptop:col-span-5">
					{
						richText && (
							<RichText content={richText}/>
						)
					}
					{
						accordions && accordions.length > 0 && (

							<div className="space-y-3 tablet-landscape:space-y-4">
								{
									accordions.map( ( accordion, index ) => {
										return typeof accordion !== 'string' ? (
											<Accordion key={index} title={accordion.title} htmlId={slugify(accordion.title)} panelId={slugify(accordion.title)}>
												{
													accordion.richText && (
														<RichText content={accordion.richText}/>
													)
												}
											</Accordion>
										) : null
									})
								}
							</div>

						)
					}
				</div>
				{
					media && typeof media !== 'string' && (
						<div className="col-span-full space-y-4 tablet:space-y-6 tablet-landscape:col-span-6 laptop:col-start-7 laptop:col-span-6">
							<Media resource={media}/>
						</div>
					)
				}
			</Grid>
		</div>
	)
}

export default TabPanel
export type { TabPanelProps }
