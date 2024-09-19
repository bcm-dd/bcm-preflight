import { MessageField as MessageFieldProps } from '@payloadcms/plugin-form-builder/dist/types'
import React, { ReactElement } from 'react'

import Field from '@components/atoms/Field'
import RichText from '@components/atoms/RichText'

function MessageField(fields: MessageFieldProps): ReactElement {
	const { message } = fields

	return (
		<Field blockType="message" width={100}>
			<RichText className="" content={message} />
		</Field>
	)
}

export default MessageField
export type { MessageFieldProps }
