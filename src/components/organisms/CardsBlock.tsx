import { CardsBlock as CardsBlockType } from '@types'
import { ReactElement } from 'react'
import Section from '@components/atoms/Section'
import clsx from 'clsx'
import Grid from '@components/atoms/Grid'
import Link from 'next/link'
import Card from '@components/atoms/Card'
import getLinkUrl from '@utilities/getLinkUrl'
import HeadingAndContent from '@components/molecules/HeadingAndContent'
type CardsBlockProps = CardsBlockType & {
	className?: string
}

function CardsBlock({
	blockType,
	cardsBlockFields,
	className,
}: CardsBlockProps): ReactElement | null {
	if (!cardsBlockFields) return null
	const { anchorId, breadcrumb, title, richText, links, cards } =
		cardsBlockFields

	const classes = clsx(blockType, className)

	return (
		<Section className={classes} htmlId={anchorId}>
			<div className="space-y-12">
				<Grid>
					<div className="col-span-full tablet:col-span-6 tablet-landscape:col-span-8 laptop:col-span-6">
						<HeadingAndContent
							breadcrumb={breadcrumb}
							title={title}
							richText={richText}
							headingLevel="h3"
							links={links}
						/>
					</div>
				</Grid>
				{cards && cards.length > 0 && (
					<Grid className="laptop:gap-6">
						{cards.map((card, index) => {
							return card.links && card.links.length > 0 ? (
								<Link
									key={index}
									href={getLinkUrl(card.links[0].link)}
									aria-label={`${card.title} page`}
									className="group col-span-full outline-1 focus:outline-dashed focus:outline-current tablet:col-span-4 tablet-landscape:col-span-4 laptop:col-span-3"
									role="link"
								>
									<Card key={index} {...card} />
								</Link>
							) : (
								<Card
									className="group col-span-full tablet:col-span-4 tablet-landscape:col-span-4 laptop:col-span-3"
									key={index}
									hasLink={false}
									{...card}
								/>
							)
						})}
					</Grid>
				)}
			</div>
		</Section>
	)
}

export default CardsBlock
