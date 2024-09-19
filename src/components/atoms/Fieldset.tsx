/**
 * External dependencies
 */
import { ReactElement, ReactNode } from 'react'

/**
 * Internal dependencies
 */

interface FieldsetProps {
	children: ReactNode
	blockType: string
	className?: string
}

function Fieldset({
	children,
	blockType,
	className = '',
}: FieldsetProps): ReactElement {
	return (
		<fieldset
			className={`fieldset fieldset-${blockType.toLowerCase()} ${
				className ? className : ''
			}`.trim()}
		>
			{children}
		</fieldset>
	)
}

export default Fieldset
export type { FieldsetProps }
