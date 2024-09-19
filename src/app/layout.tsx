import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import '@styles/globals.css'
import { ReactNode } from 'react'
import clsx from 'clsx'

import GoogleAnalytics from '@components/atoms/GoogleAnalytics'
import GoogleTagManager from '@components/atoms/GoogleTagManager'

import Providers from '@providers'
import { fetchGlobals } from '@graphql'
import { mergeOpenGraph } from '@utilities/mergeOpenGraph'

import Corridor from '@components/atoms/Corridor'
import SiteHeader from '@components/organisms/SiteHeader'
import IconSprite from '@components/atoms/IconSprite'
import SiteFooter from '@components/organisms/SiteFooter'

const nunito_sans = Nunito_Sans({
	variable: '--font-nunito-sans',
	weight: 'variable',
	subsets: ['latin'],
	display: 'swap',
	preload: true,
})

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || ''),
	icons: {
		icon: '/images/favicon.ico',
		// shortcut: '/shortcut-icon.png',
		apple: '/images/apple-touch-icon.png',
		other: {
			rel: 'apple-touch-icon',
			url: '/apple-touch-icon.png',
		},
	},
	openGraph: mergeOpenGraph(),
}

export default async function RootLayout({
	children,
}: {
	children: ReactNode
}) {
	const { header, contact, footer } = await fetchGlobals()

	const classes = clsx(
		'relative z-10 text-dark font-body overscroll-y-none overflow-x-hidden antialiased',
		nunito_sans.variable
	)
	return (
		<html className="" lang="en">
			<head>
				<GoogleAnalytics />
			</head>
			<GoogleTagManager />
			<body className={classes}>
				<Corridor>
					<SiteHeader header={header} contact={contact} />
					{children}
					<SiteFooter contact={contact} footer={footer} />
					<IconSprite />
				</Corridor>
			</body>
		</html>
	)
}
