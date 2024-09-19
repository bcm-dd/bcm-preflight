import { ReactElement } from 'react'
import {
	ArchiveBlock as ArchiveBlockType,
	CardsBlock as CardsBlockType,
	ContactFormBlock as ContactFormBlockType,
	ImageSliderBlock as ImageSliderBlockType,
	MediaAndContentBlock as MediaAndContentBlockType,
	MediaBlock as MediaBlockType,
	ProjectGrid as ProjectGridType,
	TabsBlock as TabsBlockType,
} from '@types'
import dynamic from 'next/dynamic'
import ImageSliderBlock from '@components/organisms/ImageSliderBlock'
const ArchiveBlock = dynamic(() => import('@components/organisms/ArchiveBlock'))
const CardsBlock = dynamic(() => import('@components/organisms/CardsBlock'))
const ContactFormBlock = dynamic(
	() => import('@components/organisms/ContactFormBlock')
)
const MediaAndContentBlock = dynamic(
	() => import('@components/organisms/MediaAndContentBlock')
)
const MediaBlock = dynamic(() => import('@components/organisms/MediaBlock'))
const ProjectGrid = dynamic(() => import('@components/organisms/ProjectGrid'))
const TabsBlock = dynamic(() => import('@components/organisms/TabsBlock'))

type BlockLayouts =
	| ArchiveBlockType
	| CardsBlockType
	| ContactFormBlockType
	| ImageSliderBlockType
	| MediaAndContentBlockType
	| MediaBlockType
	| ProjectGridType
	| TabsBlockType

interface RenderBlockProps {
	layout: BlockLayouts
}

function RenderBlock({ layout }: RenderBlockProps): ReactElement | null {
	switch (layout.blockType) {
		case 'archive-block':
			return <ArchiveBlock {...layout} />
		case 'cards-block':
			return <CardsBlock {...layout} />
		case 'contact-form-block':
			return <ContactFormBlock {...layout} />
		case 'image-slider-block':
			return <ImageSliderBlock {...layout} />
		case 'media-and-content-block':
			return <MediaAndContentBlock {...layout} />
		case 'media-block':
			return <MediaBlock {...layout} />
		case 'project-grid':
			return <ProjectGrid {...layout} />
		case 'tabs-block':
			return <TabsBlock {...layout} />
		default:
			return null
	}
}

export default RenderBlock
export type { RenderBlockProps, BlockLayouts }
