import { QuestionsBlock as QuestionsBlockType } from '@types'
import { ReactElement } from 'react'
import Section from '@components/atoms/Section'
import clsx from 'clsx'
import Grid from '@components/atoms/Grid'
import HeadingAndContent from '@components/molecules/HeadingAndContent'
import Accordion from '@components/molecules/Accordion'
import slugify from '@utilities/slugify'
import RichText from '@components/atoms/RichText'
type QuestionsBlockProps = QuestionsBlockType & {
	className?: string
}

function QuestionsBlock({
	blockType,
	questionsBlockFields,
	className,
}: QuestionsBlockProps): ReactElement | null {
	if (!questionsBlockFields) return null
	const { anchorId, breadcrumb, title, richText, links, faqs } =
		questionsBlockFields

	const classes = clsx(blockType, className)

	return (
		<Section className={classes} htmlId={anchorId}>
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
				{faqs && faqs.length > 0 && (
					<div className="col-span-full space-y-3 tablet:col-span-6 tablet-landscape:col-span-8 tablet-landscape:space-y-4 laptop:col-span-6">
						{faqs.map((faq, index) => {
							return typeof faq !== 'string' ? (
								<Accordion
									key={index}
									title={faq.title}
									htmlId={faq.id}
									panelId={faq.id}
								>
									{faq.richText && <RichText content={faq.richText} />}
								</Accordion>
							) : null
						})}
					</div>
				)}
			</Grid>
		</Section>
	)
}

export default QuestionsBlock
