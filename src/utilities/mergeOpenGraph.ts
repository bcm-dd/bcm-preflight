import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
	description: '',
	images: [
		{
			url: '/images/og-image.jpg',
		},
	],
	siteName: 'We Kill Giants',
	title: 'We Kill Giants',
	type: 'website',
}

export const mergeOpenGraph = (
	og?: Metadata['openGraph']
): Metadata['openGraph'] => {
	return {
		...defaultOpenGraph,
		...og,
		images: og?.images ? og.images : defaultOpenGraph.images,
	}
}
