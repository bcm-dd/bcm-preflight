import type { Metadata } from 'next'

import type { Project, Note, Page } from '@types'

import { mergeOpenGraph } from './mergeOpenGraph'

export const generateMeta = async (args: {
	doc: Page | Note | Project | null
	docType?: string | null
}): Promise<Metadata> => {
	const { doc } = args || {}

	let url =
	 doc && Array.isArray(doc?.slug)
	 ? doc.slug.join('/')
	 : doc && doc.slug && doc.slug !== 'home'
	 ? doc.slug
	 : '/'

	if (args.docType) {
		url = `${args.docType}/${doc?.slug}/`
	}

	const ogImage =
		typeof doc?.meta?.image === 'object' &&
		doc?.meta?.image !== null &&
		'url' in doc?.meta?.image &&
		`${process.env.NEXT_PUBLIC_SERVER_URL}${doc.meta.image.url}`

	return {
		description: doc?.meta?.description,
		openGraph: mergeOpenGraph({
			description: doc?.meta?.description || '',
			images: ogImage
				? [
						{
							url: ogImage,
						},
					]
				: undefined,
			title: doc?.meta?.title || 'We Kill Giants',
			url: url,
		}),
		title: doc?.meta?.title || 'We Kill Giants',
		alternates: {
			canonical: url,
		},
	}
}
