import { Media as MediaType } from '@types'

import { ReactElement } from 'react'
import clsx from 'clsx'
import Media from '@components/atoms/Media'

type VideoPosterProps = {
	id?: string
	src: MediaType
	className?: string
}

function VideoPoster({
	id,
	src,
	className,
}: VideoPosterProps): ReactElement | null {
	const imageClasses = clsx(
		'relative aspect-video object-cover w-full',
		className
	)

	return typeof src !== 'string' ? (
		<Media
			imgClassName={imageClasses}
			resource={src}/>
	) : null
}

export default VideoPoster
export type { VideoPosterProps }
