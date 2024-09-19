'use client'

import clsx from 'clsx'

import RenderBlock, { BlockLayouts } from '@components/molecules/RenderBlock'

import { ReactElement } from 'react'

interface RenderBlocksProps {
	layout: BlockLayouts[]
	className?: string
}

function RenderBlocks({
	layout,
	className = '',
}: RenderBlocksProps): ReactElement {
	const classes = clsx('blocks', className)

	return (
		<div className={classes}>
			{layout &&
				layout.map((block, index) => {
					return <RenderBlock key={index} layout={block} />
				})}
		</div>
	)
}

export default RenderBlocks
export type { RenderBlocksProps }
