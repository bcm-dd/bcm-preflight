import { PageHead as PageHeadType } from '@types'

import { ReactElement } from 'react'
import BasicPageHeader from '@components/molecules/BasicPageHeader'
import Hero from '@components/molecules/Hero'

type PageHeadProps = PageHeadType

function PageHead({
	type,
	title,
	content,
	subhead,
	media,
	links,
}: PageHeadProps): ReactElement | null {
	switch (type) {
		case 'basic':
			return (
				<BasicPageHeader subhead={subhead} title={title} content={content} />
			)
		case 'hero':
			return (
				<Hero title={title} content={content} media={media} links={links} />
			)
		default:
			return null
	}
}

export default PageHead
