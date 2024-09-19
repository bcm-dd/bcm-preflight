import clsx from 'clsx'
import { ReactElement } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Figure from '@components/atoms/Figure'
import 'react-loading-skeleton/dist/skeleton.css'

type LoadingProps = {
	className?: string
	visible?: number
	layout?: 'blog' | 'portfolio'
}

function Loading({
	visible = 10,
	layout = 'blog',
}: LoadingProps): ReactElement {
	return (
		<>
			{Array(visible)
				.fill(0, 0, visible)
				.map((item, index) => {
					let classes = ''

					if (layout === 'portfolio') {
						classes = clsx(
							layout === 'portfolio'
								? 'col-span-full tablet:col-span-4 tablet-landscape:col-span-6'
								: ''
						)
					} else {
						switch (index) {
							case 0:
							case 1:
								classes = 'col-span-full tablet-landscape:col-span-6'
								break
							case 2:
								classes =
									'col-span-full tablet:col-span-4 tablet-landscape:col-span-6'
								break
							case 5:
								classes =
									'col-span-full tablet:col-span-4 tablet-landscape:col-span-8'
								break
							case 6:
								classes = 'col-span-full tablet-landscape:col-span-4'
								break
							default:
								classes =
									'col-span-full tablet:col-span-4 tablet-landscape:col-span-3'
								break
						}
					}

					return (
						<div className={classes} key={index}>
							<SkeletonTheme baseColor={`#F2F2F2`} highlightColor={`#DDDAD8`}>
								<article className="space-y-8 @container">
									<Figure className="figure relative aspect-3/2 overflow-hidden">
										<Skeleton className="!rounded-none" height="100%" />
									</Figure>

									{layout === 'portfolio' ? (
										<footer className="flex flex-col gap-x-8 gap-y-4 @mobile:flex-row @mobile:items-start">
											<Skeleton
												height={20}
												className="!rounded-none"
												containerClassName="@mobile:w-1/3"
											/>
											<Skeleton
												height={40}
												className="!rounded-none"
												containerClassName="@mobile:w-2/3"
											/>
										</footer>
									) : (
										<footer className="flex flex-col gap-x-8 gap-y-4 @tablet:flex-row @tablet:items-start">
											<span className="flex items-start gap-x-8 gap-y-4 @tablet:w-1/3">
												<Skeleton
													height={20}
													className="!rounded-none"
													containerClassName="w-1/2"
												/>
												<Skeleton
													height={20}
													className="!rounded-none"
													containerClassName="w-1/2"
												/>
											</span>
											<Skeleton
												height={40}
												className="!rounded-none"
												containerClassName="@tablet:w-2/3"
											/>
										</footer>
									)}
								</article>
							</SkeletonTheme>
						</div>
					)
				})}
		</>
	)
}

export default Loading
export type { LoadingProps }
