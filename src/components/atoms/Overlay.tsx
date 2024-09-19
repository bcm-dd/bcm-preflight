import clsx from 'clsx'
import { ReactElement } from 'react'

type OverlayProps = {
	className?: string
}

function Overlay({ className }: OverlayProps): ReactElement {
	const classes = clsx(
		'absolute z-10 pointer-events-none inset-x-0 bottom-0 opacity-60 bg-gradient-to-t from-black h-3/4 transition-all duration-200 group-hover:opacity-90',
		'tablet:h-full tablet:top-0 tablet:right-auto tablet:w-3/4 tablet:bg-gradient-to-r tablet:from-black',
		'tablet-landscape:w-1/2',
		className
	)

	return <div className={classes} />
}

export default Overlay
export type { OverlayProps }
