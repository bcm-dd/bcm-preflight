import clsx from 'clsx'
import React, { ReactElement } from 'react'

interface ParagraphProps {
	paragraph: (ReactElement | null)[] | string
	className?: string
}

function Paragraph({ paragraph, className }: ParagraphProps): ReactElement {
	const classes = clsx('', className)

	return <p className={classes}>{paragraph}</p>
}

export default Paragraph
export type { ParagraphProps }
