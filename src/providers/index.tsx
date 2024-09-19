'use client'

import { ScrollInfoProvider } from '@faceless-ui/scroll-info'
import { ReactNode } from 'react'
import { ModalProvider, ModalContainer } from '@faceless-ui/modal'
import { UserbackProvider } from '@userback/react'

type ProvidersProps = {
	children: ReactNode
}

function Providers({ children }: ProvidersProps) {
	return (
		// <UserbackProvider
		// 	token={process.env.NEXT_PUBLIC_USERBACK_ACCESS_TOKEN || ''}
		// >
			<ScrollInfoProvider>
				<ModalProvider transTime={250}>
					{children}
					<ModalContainer className="flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-150" />
				</ModalProvider>
			</ScrollInfoProvider>
		// </UserbackProvider>
	)
}

export default Providers
export type { ProvidersProps }
