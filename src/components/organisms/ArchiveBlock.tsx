'use client'
import React, { ReactElement, useEffect, useState } from 'react'
import {
	ArchiveBlock as ArchiveBlockType,
	Post,
	Project,
	Category,
} from '@types'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import getLinkUrl from '@utilities/getLinkUrl'
import Grid from '@components/atoms/Grid'
import Media from '@components/atoms/Media'
import Heading from '@components/atoms/Heading'
import RichText from '@components/atoms/RichText'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import { fetchBlog, fetchProject } from '@graphql'

type ArchiveBlockProps = ArchiveBlockType & {
	className?: string
}

function ArchiveBlock({
	blockType,
	archiveBlockFields,
	className,
}: ArchiveBlockProps): ReactElement | null {
	const [loading, setLoading] = useState<boolean>(true)
	const [filteredPosts, setFilteredPosts] = useState<Post[] | undefined>(
		undefined
	)

	const [pageNumber, setPageNumber] = useState<number>(1)
	const [hasNextPage, setHasNextPage] = useState<boolean | undefined>(undefined)

	const flattenedCategories = (categories: (Category | string)[]) =>
		categories
			? categories.map((category) => {
					if (typeof category === 'object') return category.id
					else return category
				})
			: []

	useEffect(() => {
		setLoading(true)
		const fetchPosts = async () => {
			const req = await fetchBlog(6 * pageNumber, flattenedCategories)
			const res = req

			setTimeout(() => {
				setFilteredPosts(res.docs)
				setHasNextPage(res.hasNextPage)
				setLoading(false)
			}, 300)
		}

		fetchPosts() // make sure to catch any error
			.catch(console.error)
	}, [pageNumber])

	const loadMore = () => {
		if (hasNextPage) {
			setLoading(true)
			setPageNumber(pageNumber + 1)
		}
	}
	if (!archiveBlockFields) return null
	const { introContent, relationTo, categories } = archiveBlockFields

	const classes = clsx(blockType, className, 'flex flex-col gap-5')

	return (
		<div className={classes}>
			{introContent && <RichText content={introContent} />}
			{flattenedCategories && flattenedCategories.length > 0 ? (
				<Grid>
					{filteredPosts?.map((post) => {
						return (
							<article className="col-span-6 flex flex-col gap-4" key={post.id}>
								{post.thumbnail && (
									<Media
										resource={post.thumbnail}
										className="col-span-full col-start-1 row-span-full row-start-1"
										imgClassName="object-cover object-center w-full h-full opacity-90"
									/>
								)}
								<Heading level="h2" title={post.title}>
									<Link
										className="col-span-full tablet:col-span-4 tablet-landscape:col-span-6 laptop:col-span-5 odd:laptop:col-start-2"
										href={`${relationTo}/${post.slug}`}
									>
										{post.title}
									</Link>
								</Heading>
							</article>
						)
					})}
				</Grid>
			) : (
				<div className={`min-h-[50vh]`} />
			)}
		</div>
	)
}

export default ArchiveBlock
export type { ArchiveBlockProps }
