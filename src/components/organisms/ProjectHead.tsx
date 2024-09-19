import { PageHead as PageHeadType } from '@types'

import { ReactElement } from 'react'
import BasicPageHeader from '@components/molecules/BasicPageHeader'
import ProjectHero from '@components/molecules/ProjectHero'

type ProjectHeadProps = PageHeadType

function ProjectHead({
	type,
	title,
	content,
	subhead,
	media,
	links,
}: ProjectHeadProps): ReactElement | null {
	switch (type) {
		case 'basic':
			return (
				<BasicPageHeader subhead={subhead} title={title} content={content} />
			)
		case 'hero':
			return (
				<ProjectHero
					title={title}
					content={content}
					media={media}
					links={links}
				/>
			)
		default:
			return null
	}
}

export default ProjectHead
