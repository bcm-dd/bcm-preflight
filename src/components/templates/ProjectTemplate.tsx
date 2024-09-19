'use client'

import { Project } from '@types'
import React, { Fragment } from 'react'
import { useLivePreview } from '@payloadcms/live-preview-react'

import Main from '@components/atoms/Main'
import RenderBlocks from '@components/organisms/RenderBlocks'
import ProjectHead from '@components/organisms/ProjectHead'

type ProjectTemplateProps = {
	project: Project
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ project }) => {
	const { data } = useLivePreview({
		serverURL: process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL || '',
		depth: 1,
		initialData: project,
	})
	
	const { layout, pageHead } = data
	
	return (
		<Fragment>
			<div className="space-y-12">
				<ProjectHead {...pageHead} />
				<Main>
					{layout && <RenderBlocks className="space-y-12" layout={layout} />}
				</Main>
			</div>
		</Fragment>
	)
}

export default ProjectTemplate
