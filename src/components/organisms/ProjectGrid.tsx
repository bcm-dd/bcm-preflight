'use client'
import { ProjectGrid as ProjectGridType } from '@types'
import { ReactElement } from 'react'
import clsx from 'clsx'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import getLinkUrl from '@utilities/getLinkUrl'
import Grid from '@components/atoms/Grid'
import Media from '@components/atoms/Media'
import RichText from '@components/atoms/RichText'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'

type ProjectGridProps = ProjectGridType & {
	className?: string
}

function ProjectGrid({
	blockType,
	projectGridFields,
	className,
}: ProjectGridProps): ReactElement | null {
	if (!projectGridFields) return null
	const { introText, tiles } = projectGridFields

	const classes = clsx(blockType, className, 'flex flex-col gap-5')

	return (
		<div className={classes}>
			{introText && <RichText content={introText} />}

			<Grid className="grid-flow-row-dense">
				{tiles &&
					tiles.map((medium, index) => {
						const {
							type,
							width,
							height,
							project,
							post,
							image,
							tileText,
							addLink,
							link,
							invertBackground,
						} = medium


						const tileClasses = clsx(
							'col-span-full',
							height ? 'row-span-2' : '',
							width === 'oneThird' ? 'tablet:col-span-4' : '',
							width === 'half' ? 'tablet:col-span-6' : '',
							width === 'twoThirds' ? 'tablet:col-span-8' : ''
						)

						const textTileClasses = clsx(
							'w-full h-full flex items-center leading-loose group/tile relative grid h-full grid-cols-4 grid-rows-3 overflow-hidden',
							invertBackground ? 'bg-dark text-light' : 'bg-light text-dark'
						)

						const href =
							type === 'project' && project && typeof project !== 'string' && project.slug
								? `/projects/${project.slug}`
								: undefined

						const postHref =
							type === 'newsArticle' && post && typeof post !== 'string' && post.slug
								? `/posts/${post.slug}`
								: undefined

						return (
							<motion.div
								key={index}
								className={tileClasses}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.5 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								{type && type === 'project' && project ? (
									<div className="group/tile flow grid h-full grid-cols-4 grid-rows-3 justify-end overflow-hidden bg-dark">
										{typeof project !== 'string' && project.thumbnail && (
											<Media
												resource={project.thumbnail}
												className="col-span-full col-start-1 row-span-full row-start-1"
												imgClassName="object-cover object-center w-full h-full opacity-90"
											/>
										)}
											<div className="relative z-10 col-span-full col-start-1 row-start-1 -translate-y-full self-start p-5 transition duration-500 group-hover/tile:translate-y-0">
												<h3 className="inline-flex rounded-lg bg-white px-4 py-2">
													{typeof project !== 'string' && project.title}
													{typeof project !== 'string' && project.categories && project.categories.length > 0 && typeof project.categories[0] !== 'string'
														? ` | ${project.categories[0].title}`
														: ''}
												</h3>
											</div>
											{typeof project !== 'string' && project.slug && (
												<div className="z-20 col-span-2 col-start-3 row-start-3 translate-y-full self-end justify-self-end p-5 transition duration-[350ms] group-hover/tile:translate-y-0">
													<Link
														className="group/link text-lg inline-flex items-center gap-2 rounded-lg bg-primary px-2.5 py-2 font-bold capitalize text-black transition duration-500 hover:bg-white"
														href={href || ''}
														target="_self"
														role="link"
													>
														Full story
														<ArrowUpRightIcon className="size-5 transition duration-500 group-hover/link:text-primary" />
													</Link>
												</div>
											)}
									</div>
								) : type && type === 'image' ? (
									<div className="group/tile relative grid h-full grid-cols-4 grid-rows-3 justify-end overflow-hidden">
										<Media
											resource={image ?? undefined}
											className="col-span-full col-start-1 row-span-full row-start-1"
											imgClassName="object-cover object-center w-full h-full"
										/>
										{addLink && link && (
											<div className="z-20 col-span-2 col-start-3 row-start-3 translate-y-full self-end justify-self-end p-5 transition duration-[350ms] group-hover/tile:translate-y-0">
												<Link
													className="group/link text-lg inline-flex items-center gap-2 rounded-lg bg-primary px-2.5 py-2 font-bold capitalize text-black transition duration-500 hover:bg-white"
													href={getLinkUrl(link)}
													target={link?.newTab ? '_blank' : '_self'}
													role="link"
												>
													{link?.label ?? 'Full Story'}
													<ArrowUpRightIcon className="size-5 transition duration-500 group-hover/link:text-primary" />
												</Link>
											</div>
										)}
									</div>
								) : type && type === 'text' ? (
									<div className={textTileClasses}>
										<RichText
											className="col-span-full col-start-1 row-span-full row-start-1 p-5 laptop:px-20"
											content={tileText}
										/>
										{addLink && link && (
											<div className="z-20 col-span-2 col-start-3 row-start-3 translate-y-full self-end justify-self-end p-5 transition duration-[350ms] group-hover/tile:translate-y-0">
												<Link
													className="group/link text-lg inline-flex items-center gap-2 rounded-lg bg-primary px-2.5 py-2 font-bold capitalize text-black transition duration-500 hover:bg-white"
													href={getLinkUrl(link)}
													target={link?.newTab ? '_blank' : '_self'}
													role="link"
												>
													{link?.label ?? 'Full Story'}
													<ArrowUpRightIcon className="size-5 transition duration-500 group-hover/link:text-primary" />
												</Link>
											</div>
										)}
									</div>
								) : type && type === 'newsArticle' ? (
									<div className="group/post grid h-full grid-cols-4 grid-rows-3 justify-end overflow-hidden bg-light">
										{post && typeof post !== 'string' && post.thumbnail && (
											<Media
												resource={post.thumbnail ?? undefined}
												className="col-span-full col-start-1 row-span-full row-start-1"
												imgClassName="object-cover object-center w-full h-full opacity-90"
											/>
										)}
										<div className="relative z-10 col-span-full col-start-1 row-start-1 -translate-y-full self-start p-5 transition duration-500 group-hover/post:translate-y-0">
											<h3 className="inline-flex rounded-lg bg-white px-4 py-2">
												{post && typeof post !== 'string' && post.title}
												{post && typeof post !== 'string' && post.categories && post.categories.length > 0 && typeof post.categories[0] !== 'string'
													? ` | ${post.categories[0].title}`
													: ''}
											</h3>
										</div>
										{postHref && (
											<div className="z-20 col-span-2 col-start-3 row-start-3 translate-y-full self-end justify-self-end p-5 transition duration-[350ms] group-hover/post:translate-y-0">
												<Link
													className="group/link text-lg inline-flex items-center gap-2 rounded-lg bg-primary px-2.5 py-2 font-bold capitalize text-black transition duration-500 hover:bg-white"
													href={postHref}
													target="_self"
													role="link"
												>
													Full story
													<ArrowUpRightIcon className="size-5 transition duration-500 group-hover/link:text-primary" />
												</Link>
											</div>
										)}
									</div>
								) : null}
							</motion.div>
						)
					})}
			</Grid>
		</div>
	)
}

export default ProjectGrid
export type { ProjectGridProps }
