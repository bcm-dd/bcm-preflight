'use client'

import { useMemo } from 'react'
import useWindowDimensions from '@hooks/useWindowDimensions'

export type Breakpoint =
	| 'mobile'
	| 'mobile-wide'
	| 'tablet'
	| 'tablet-landscape'
	| 'laptop'
	| 'desktop'

type BreakpointWithWidth = {
	breakpoint: Breakpoint
	width: number
}

export const BREAKPOINTS: BreakpointWithWidth[] = [
	{ breakpoint: 'desktop', width: 1600 },
	{ breakpoint: 'laptop', width: 1366 },
	{ breakpoint: 'tablet-landscape', width: 1024 },
	{ breakpoint: 'tablet', width: 768 },
	{ breakpoint: 'mobile-wide', width: 414 },
	{ breakpoint: 'mobile', width: 0 },
]

function getBreakpointIndex(breakpoint: Breakpoint): number {
	return BREAKPOINTS.findIndex((bp) => bp.breakpoint === breakpoint)
}

export function useBreakpoint(): Breakpoint {
	const windowSize = useWindowDimensions()
	return useMemo<Breakpoint>(() => {
		if (!windowSize) return 'mobile'
		const match = BREAKPOINTS.find((bp) => windowSize.width >= bp.width)
		return match?.breakpoint ?? 'mobile'
	}, [windowSize])
}

export function useIsBreakpointOrWider(queriedBreakpoint: Breakpoint): boolean {
	const currentBreakpoint = useBreakpoint()

	return useMemo(() => {
		// Mobile breakpoint always matches
		if (queriedBreakpoint === 'mobile') return true

		// Otherwise, match on index
		const queriedIndex = getBreakpointIndex(queriedBreakpoint)
		const currentIndex = getBreakpointIndex(currentBreakpoint)
		return currentIndex <= queriedIndex
	}, [queriedBreakpoint, currentBreakpoint])
}
