import { fetchPage, fetchPages } from '@graphql'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generateMeta } from '@utilities/generateMeta'
import PageTemplate from '@components/templates/PageTemplate'

type PageType = {
	params: {
		slug: string[]
	}
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string[] }
}): Promise<Metadata> {
	const slug = params.slug
	const page = await fetchPage(slug)

	return generateMeta({ doc: page })
}

const Page = async ({ params }: PageType) => {
	const { slug } = params

	const page = await fetchPage(slug)

	if (!page) return notFound()

	return <PageTemplate page={page} />
}

export default Page

export async function generateStaticParams() {
	const pages = await fetchPages()

	return pages.map(({ breadcrumbs }) => ({
		// @ts-ignore
		slug: breadcrumbs[breadcrumbs.length - 1].url
			.replace(/^\/|\/$/g, '')
			.split('/'),
	}))
}
