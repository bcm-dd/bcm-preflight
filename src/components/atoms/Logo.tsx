import { ReactElement } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import Media from '@components/atoms/Media'

type LogoType = {
	className?: string
}

function Logo({ className }: LogoType): ReactElement {
	const classes = clsx('site-logo inline-block', className)

	return (
		<Link
			className={classes}
			href="/"
			aria-label="BCM homepage"
			target="_self"
			role="link"
		>
			<svg
				viewBox="0 0 2858 992"
				xmlns="http://www.w3.org/2000/svg"
				className="h-12 fill-current transition hover:opacity-100"
			>
				<g transform="matrix(1,0,0,1,-325,-744)">
					<g transform="matrix(4.16667,0,0,4.16667,0,0)">
						<g id="Layer-1">
							<g transform="matrix(1,0,0,1,263.904,178.697)">
								<path d="M0,113.144L171.486,113.144L171.486,0L113.144,0C50.656,0 0,50.656 0,113.144" />
							</g>
							<g transform="matrix(-0.550718,0.834692,0.834692,0.550718,444.088,319.048)">
								<path d="M85.743,-159.296C137.901,-124.883 152.286,-54.704 117.873,-2.545L85.743,46.152L-8.697,-16.158L85.743,-159.296Z" />
							</g>
							<g transform="matrix(1,0,0,1,533.847,416.58)">
								<path d="M0,-237.883C-40.278,-237.883 -72.93,-205.231 -72.93,-164.953L-72.93,0L72.93,0L72.93,-164.953C72.93,-205.231 40.278,-237.883 0,-237.883" />
							</g>
							<g transform="matrix(1,0,0,1,690.757,416.58)">
								<path d="M0,-237.883C-40.279,-237.883 -72.93,-205.231 -72.93,-164.953L-72.93,0L72.93,0L72.93,-164.953C72.93,-205.231 40.278,-237.883 0,-237.883" />
							</g>
							<g transform="matrix(1,0,0,1,78.2028,297.611)">
								<rect x="0" y="-118.914" width="86.085" height="237.814" />
							</g>
							<g transform="matrix(1,0,0,1,258.423,358.083)">
								<path d="M0,-120.957C0,-153.235 -26.165,-179.385 -58.429,-179.385L-83.088,-179.385L-83.088,58.428L-60.486,58.428C-43.788,58.428 -28.655,51.66 -17.712,40.717C-6.769,29.774 0,14.641 0,-2.057C0,-34.321 -26.165,-60.486 -58.429,-60.486L-60.486,-60.486C-43.788,-60.486 -28.655,-67.255 -17.712,-78.198C-6.769,-89.141 0,-104.259 0,-120.957" />
							</g>
						</g>
					</g>
				</g>
			</svg>
		</Link>
	)
}

export default Logo
