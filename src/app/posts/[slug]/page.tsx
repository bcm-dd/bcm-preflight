import { fetchPost, fetchPosts } from '@graphql'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generateMeta } from '@utilities/generateMeta'
import PostTemplate from '@components/templates/PostTemplate'

type PostType = {
	params: { slug: string }
}

export async function generateMetadata({
	params,
}: PostType): Promise<Metadata> {
	const { slug } = params
	const post = await fetchPost(slug)
	return generateMeta({ doc: post })
}

const Post = async ({ params }: PostType) => {
	const { slug } = params
	
	const post = await fetchPost(slug)

	if (!post) return notFound()

	return <PostTemplate post={post} />
}

export default Post

export async function generateStaticParams() {
	const posts = await fetchPosts()
	return posts.map((post) => ({
		slug: post.slug,
	}))
}
