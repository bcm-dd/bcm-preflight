import React, { Fragment, ReactElement } from 'react'
import clsx from 'clsx'
import Grid from '@components/atoms/Grid'
import Heading from '@components/atoms/Heading'
import { PageHead } from '@types'
import Media from '@components/atoms/Media'
import ButtonGroup from '@components/atoms/ButtonGroup'
type ProjectHeroProps = PageHead & {
	className?: string
}

function ProjectHero({
	title,
	content,
	media,
	links,
}: ProjectHeroProps): ReactElement {
	const classes = clsx(
		'project-hero relative overflow-hidden flex flex-col gap-5'
	)
	const contentClasses = clsx('flex flex-col grow shrink-0')
	const imageClasses = clsx('relative z-0 shrink min-h-0')
	return (
		<div className={classes} id="site-header">
			{media && typeof media !== 'string' && (
				<Fragment>
					<Media
						className={imageClasses}
						imgClassName="object-cover object-center size-full"
						videoClassName="object-cover object-center size-full"
						resource={media}
						background={true}
						playing={true}
						priority
					/>
				</Fragment>
			)}
			<div className={contentClasses}>
				<Grid className="items-end">
					{content && (
						<div className="col-span-full space-y-4 tablet:col-span-6 tablet-landscape:col-span-8">
							<Heading level="h1" title={content}>
								{content}
							</Heading>
							{links && links.length > 0 && <ButtonGroup links={links} />}
						</div>
					)}
					{title && (
						<div className="col-span-full tablet:col-span-6 tablet-landscape:col-span-4 tablet-landscape:col-start-9 tablet-landscape:justify-self-end">
							<Heading level="h3" title={title}>
								{title}
							</Heading>
						</div>
					)}
				</Grid>
			</div>
		</div>
	)
}

export default ProjectHero
export type { ProjectHeroProps }
