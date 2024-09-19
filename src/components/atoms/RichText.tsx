import clsx from 'clsx'
import React, { ReactElement } from 'react'

import { serializeLexical } from '@utilities/serialize'

interface RichTextProps {
	className?: string
	content: any
	submissionData?: { field: string; value: unknown }[]
}

function RichText({
	content,
	submissionData,
	className,
}: RichTextProps): ReactElement | null {
	const classes = clsx('rich-text space-y-4 w-full', className)

	return content ? (
		<div className={classes}>
			{' '}
			{!Array.isArray(content) &&
				typeof content === 'object' &&
				'root' in content &&
				serializeLexical({
					nodes: content?.root?.children,
					submissionData: submissionData,
				})}
		</div>
	) : null
}

export default RichText
export type { RichTextProps }
