import { ReactElement } from 'react'
import clsx from 'clsx'
import Grid from '@components/atoms/Grid'
import Heading from '@components/atoms/Heading'
import { PageHead } from '@types'
import Paragraph from '@components/atoms/Paragraph'
import Breadcrumb from '@components/atoms/Breadcrumb'
type BasicPageHeaderProps = PageHead & {
	className?: string
}

function BasicPageHeader({
	title,
	content,
	breadcrumb,
}: BasicPageHeaderProps): ReactElement {
	const classes = clsx(
		'basic-header bg-gradient-to-b from-accent-100 via-accent-100 to-accent-50 scroll-margin-top pt-16 pb-12 tablet-landscape:pb-14 tablet-landscape:pt-28 laptop:pb-16 laptop:pt-32'
	)
	return (
		<div className={classes} id="site-header">
			<Grid>
				{title && (
					<div className="col-span-full tablet:col-span-7 tablet-landscape:col-span-10 laptop:col-span-8">
						<div className="space-y-4">
							<header className="space-y-2">
								{breadcrumb && <Breadcrumb breadcrumb={breadcrumb} />}
								<Heading level="h1" title={title}>
									{title}
								</Heading>
							</header>
							{content && (
								<Paragraph
									paragraph={content}
									className="max-w-prose text-body-md tablet:text-body-lg"
								/>
							)}
						</div>
					</div>
				)}
			</Grid>
		</div>
	)
}

export default BasicPageHeader
export type { BasicPageHeaderProps }
