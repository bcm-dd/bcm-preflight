import React, { ReactElement } from 'react'

import ConfirmationMessage from '@components/atoms/ConfirmationMessage'

interface ConfirmationProps {
	message?: {
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
	} | null
	submissionData?: { field: string; value: unknown }[]
}

function Confirmation({
	message,
	submissionData,
}: ConfirmationProps): ReactElement | null {
	return message ? (
		<ConfirmationMessage message={message} submissionData={submissionData} />
	) : null
}

export default Confirmation
export type { ConfirmationProps }
