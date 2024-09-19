import { fetchProject, fetchProjects } from '@graphql'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generateMeta } from '@utilities/generateMeta'
import ProjectTemplate from '@components/templates/ProjectTemplate'

type ProjectPageType = {
	params: { slug: string }
}

export async function generateMetadata({
	params,
}: ProjectPageType): Promise<Metadata> {
	const { slug } = params
	const project = await fetchProject(slug)
	return generateMeta({ doc: project })
}

const ProjectPage = async ({ params }: ProjectPageType) => {
	const { slug } = params
	
	const project = await fetchProject(slug)

	if (!project) return notFound()

	return <ProjectTemplate project={project} />
}

export default ProjectPage

export async function generateStaticParams() {
	const projects = await fetchProjects()
	return projects.map((project) => ({
		slug: project.slug,
	}))
}
