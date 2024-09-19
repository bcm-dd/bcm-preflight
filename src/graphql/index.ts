import { CONTACT, GLOBALS } from '@graphql/globals'
import { PAGE, PAGES } from '@graphql/pages'
import { POST, POSTS, BLOG } from '@graphql/posts'
import { PROJECT, PROJECTS } from '@graphql/projects'
import { Contact, Header, Page, Project, Footer } from '@types'

const next = {
	revalidate: 600,
}

const queryMap = {
	pages: {
		single: PAGE,
		multiple: PAGES,
		key: 'Pages',
	},
	posts: {
		single: POST,
		multiple: POSTS,
		key: 'Posts',
	},
	projects: {
		single: PROJECT,
		multiple: PROJECTS,
		key: 'Projects',
	},
}

export const fetchGlobals = async (): Promise<{
	contact: Contact
	footer: Footer
	header: Header
}> => {
	const { data, errors } = await fetch(
		`${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}/api/graphql?globals`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			next,
			body: JSON.stringify({
				query: GLOBALS,
			}),
		}
	).then((res) => res.json())

	if (errors) {
		console.error(errors)
		throw new Error()
	}

	return {
		contact: data.Contact,
		footer: data.Footer,
		header: data.Header,
	}
}

export const fetchContact = async (): Promise<{
	contact: Contact
}> => {
	const { data, errors } = await fetch(
		`${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}/api/graphql?globals=contact`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			next,
			body: JSON.stringify({
				query: CONTACT,
			}),
		}
	).then((res) => res.json())

	if (errors) {
		console.error(errors)
		throw new Error()
	}

	return {
		contact: data.Contact,
	}
}

export const fetchPage = async (
	incomingSlugSegments?: string[]
): Promise<Page | null> => {
	const slugSegments = incomingSlugSegments || ['home']

	const slug = slugSegments[slugSegments.length - 1]
	// @ts-ignore
	const { data, errors } = await fetch(
		`${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}/api/graphql?page=${slug}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			next,
			body: JSON.stringify({
				query: PAGE,
				variables: {
					slug,
				},
			}),
		}
	).then((res) => {
		return res.json()
	})

	if (errors) {
		console.error('Page Errors', JSON.stringify(errors))
		throw new Error()
	}

	const pagePath = `/${slugSegments.join('/')}`

	const page = data.Pages?.docs.find(({ breadcrumbs }: Page) => {
		if (breadcrumbs) {
			const { url } = breadcrumbs[breadcrumbs.length - 1]
			return url === pagePath
		}

		return null
	})

	if (page) {
		return page
	}

	return null
}

export const fetchPages = async (): Promise<
	Array<{ breadcrumbs: Page['breadcrumbs']; slug: string }>
> => {
	// @ts-ignore
	const { data, errors } = await fetch(
		`${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}/api/graphql?pages`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			next,
			body: JSON.stringify({
				query: PAGES,
			}),
		}
	).then((res) => res.json())

	if (errors) {
		console.error('Pages Errors', JSON.stringify(errors))
		throw new Error()
	}

	return data?.Pages?.docs
}

export const fetchProject = async (slug: string): Promise<Project | null> => {
	const { data, errors } = await fetch(
		`${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}/api/graphql?project=${slug}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			next,
			body: JSON.stringify({
				query: PROJECT,
				variables: {
					slug,
				},
			}),
		}
	).then((res) => res.json())

	if (errors) {
		console.error('Project Errors', JSON.stringify(errors))
		throw new Error()
	}

	return data?.Projects?.docs[0] || null
}

export const fetchProjects = async (): Promise<Project[]> => {
	const { data, errors } = await fetch(
		`${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}/api/graphql?projects`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			next,
			body: JSON.stringify({
				query: PROJECTS,
			}),
		}
	).then((res) => res.json())

	if (errors) {
		console.error('Projects Errors', JSON.stringify(errors))
		throw new Error()
	}

	return data?.Projects?.docs || []
}

export const fetchPost = async (slug: string): Promise<Post | null> => {
	const { data, errors } = await fetch(
		`${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}/api/graphql?post=${slug}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			next,
			body: JSON.stringify({
				query: POST,
				variables: {
					slug,
				},
			}),
		}
	).then((res) => res.json())

	if (errors) {
		console.error('Post Errors', JSON.stringify(errors))
		throw new Error()
	}

	return data?.Posts?.docs[0] || null
}

export const fetchPosts = async (): Promise<Post[]> => {
	const { data, errors } = await fetch(
		`${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}/api/graphql?posts`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			next,
			body: JSON.stringify({
				query: POSTS,
			}),
		}
	).then((res) => res.json())

	if (errors) {
		console.error('Posts Errors', JSON.stringify(errors))
		throw new Error()
	}

	return data?.Posts?.docs || []
}

export const fetchBlog = async (
	limit: number,
	categories: String[]
): Promise<{
	hasNextPage: boolean
	hasPrevPage: boolean
	nextPage: number
	prevPage: number
	docs: Post[]
}> => {
	const { data, errors } = await fetch(
		`${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}/api/graphql?post`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			next,
			body: JSON.stringify({
				query: BLOG,
				variables: {
					limit,
					categories,
				},
			}),
		}
	).then((res) => res.json())

	if (errors) {
		console.error('Blog Errors', JSON.stringify(errors))
		throw new Error()
	}

	return {
		...data?.Posts,
	}
}
