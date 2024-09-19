'use client'

import { Post } from '@types'
import React, { Fragment, ReactElement } from 'react'
import { useLivePreview } from '@payloadcms/live-preview-react'

import Main from '@components/atoms/Main'
import RenderBlocks from '@components/organisms/RenderBlocks'
import PageHead from '@components/organisms/PageHead'

interface PostTemplateProps {
	post: Post
}

const PostTemplate: React.FC<PostTemplateProps> = ({ post }) => {
	const { data } = useLivePreview({
		serverURL: process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL || '',
		depth: 1,
		initialData: post,
	})

	const { layout, pageHead } = data

	return (
		<Fragment>
			<div className="space-y-12">
				<PageHead {...pageHead} />
				<Main>
					{layout && <RenderBlocks className="space-y-12" layout={layout} />}
				</Main>
			</div>
		</Fragment>
	)
}

export default PostTemplate