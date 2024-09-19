import { SVGProps } from 'react'

import { ICON_NAMESPACE } from '@components/atoms/IconSprite'

type IconProps = Pick<
	SVGProps<SVGUseElement>,
	'x' | 'y' | 'width' | 'height'
> & {
	name: string
	raw?: boolean
}

function Icon({ name, raw = false, ...use }: IconProps): JSX.Element {
	const href = `#${ICON_NAMESPACE}-${name}`
	if (raw) return <use href={href} {...use} />
	return (
		<svg
			className="pointer-events-none h-full w-full"
			xmlns="http://www.w3.org/2000/svg"
		>
			<use href={href} />
		</svg>
	)
}

export default Icon
export type { IconProps }
