import React, { Fragment, ReactElement } from 'react'
import Grid from '@components/atoms/Grid'
import Paragraph from '@components/atoms/Paragraph'
import TextLink from '@components/atoms/TextLink'

type ErrorPageTemplateProps = {}
function ErrorPageTemplate({}: ErrorPageTemplateProps): ReactElement {
	return (
		<Fragment>
			<div className="scroll-margin-top pt-12 tablet:pt-16 laptop:pt-24 desktop:pt-32">
				<Grid>
					<div className="col-span-full space-y-4 tablet:col-span-7">
						<div className="laptop:space-y-2">
							<Paragraph
								className="text-h4 tablet:text-h4-tablet laptop:text-h4-desktop"
								paragraph="404 Page not found"
							/>
							<h1 className="text-[3rem] font-normal tablet:text-[5.5rem] laptop:text-[8rem]">
								No giants here.
							</h1>
						</div>
						<h3 className="text-[1.375rem] font-light tablet:text-[1.75rem] laptop:text-[2.375rem]">
							It looks like what ever was here has been dealt with.
						</h3>
						<p className="text-body font-light tablet:text-body-md laptop:text-body-lg">
							You can head back{' '}
							<TextLink
								className="after:bg-full"
								href="/"
								aria-label="We kill Giants homepage"
							>
								home
							</TextLink>
							, or use the menu up there to check out something else.
						</p>
					</div>
				</Grid>
			</div>
		</Fragment>
	)
}

export default ErrorPageTemplate
export type { ErrorPageTemplateProps }
