import { ReactElement } from 'react'
import { LinkGroup } from '@types'
import RichText from '@components/atoms/RichText'
import Breadcrumb from '@components/atoms/Breadcrumb'
import Heading from '@components/atoms/Heading'

import AnimatedWrapper from '@components/atoms/AnimatedWrapper'
import ButtonGroup from '@components/atoms/ButtonGroup'

interface HeadingAndContentProps {
	breadcrumb?: string | null
	title?: string | null
	richText?:
		| {
		root: {
			children: {
				type: string;
				version: number;
				[k: string]: unknown;
			}[];
			direction: ('ltr' | 'rtl') | null;
			format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
			indent: number;
			type: string;
			version: number;
		};
		[k: string]: unknown;
	}| null
	links?: LinkGroup
	headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
}

function HeadingAndContent({
	breadcrumb,
	title,
	richText,
	headingLevel = 'h2',
	links,
}: HeadingAndContentProps): ReactElement {

	return (
		<div className="space-y-6">
				{(title || breadcrumb) && (
					<header className="space-y-2">
						{breadcrumb && <Breadcrumb breadcrumb={breadcrumb} />}
						{title && (
							<Heading
								level={headingLevel}
							>{title}</Heading>
						)}
					</header>
				)}
				<RichText content={richText} />

			{links && links.length > 0 && (
					<ButtonGroup  links={links}/>
			)}
		</div>
	)
}

export default HeadingAndContent
export type { HeadingAndContentProps }
