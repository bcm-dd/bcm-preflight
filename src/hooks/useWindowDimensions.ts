'use client'

import { useEffect, useState } from 'react'

export type WindowDimensions = {
	width: number
	height: number
}

// Window is undefined during SSR
export function getWindowDimensions(): WindowDimensions | undefined {
	if (typeof window === 'undefined') return undefined
	return {
		width: window.innerWidth,
		height: window.innerHeight,
	}
}

export default function useWindowDimensions(): WindowDimensions | undefined {
	const [dimensions, setDimensions] = useState(getWindowDimensions())
	useEffect(() => {
		const obs = new ResizeObserver(() => setDimensions(getWindowDimensions()))
		obs.observe(document.documentElement)
		return () => obs.disconnect()
	}, [setDimensions])
	return dimensions
}
