'use client'

import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { Fragment, useEffect } from 'react'

import { analyticsEvent } from '@utilities/analytics'

const gaMeasurementID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

function GoogleAnalytics() {
	const pathname = usePathname()

	useEffect(() => {
		if (!gaMeasurementID || !window?.location?.href) return

		analyticsEvent('page_view', {
			page_title: document.title,
			page_location: window.location.href,
			page_path: pathname,
		})
	}, [pathname])

	if (!gaMeasurementID) return null

	return (
		<Fragment>
			<Script
				defer
				src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementID}`}
			/>
			<Script
				id="google-analytics"
				defer
				dangerouslySetInnerHTML={{
					__html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${gaMeasurementID}', { send_page_view: false });`,
				}}
			/>
		</Fragment>
	)
}

export default GoogleAnalytics
