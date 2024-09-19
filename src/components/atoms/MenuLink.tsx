'use client'

import clsx from 'clsx'
import { Link as LinkType } from '@types'
import { ReactElement } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type MenuLinkProps = LinkType & {
	role?: 'link' | 'menuitem'
	expanded?: boolean
	className?: string
}

function MenuLink({
	type,
	newTab,
	url,
	reference,
	label,
	className,
	expanded,
	role = 'menuitem',
}: MenuLinkProps): ReactElement {
	const classes = clsx('menu-link', className)
	const route = usePathname()
	const getUrl = (): string => {
		if (type === 'reference') {
			if (!reference) {
				return ''
			}
			if (typeof reference.value === 'string') {
				return ''
			}

			if (reference.value?.slug === 'home') {
				return '/'
			}

			return `/${reference.value?.slug}`
		}

		return url ? url : ''
	}

	const isCurrent = getUrl() === route ? 'page' : undefined

	return (
		<Link
			href={getUrl()}
			aria-label={label}
			className={classes}
			target={newTab ? '_blank' : '_self'}
			rel="noreferrer"
			aria-current={isCurrent}
			role={role}
			aria-expanded={expanded}
		>
			<span className="relative inline-block">{label}</span>
		</Link>
	)
}

export default MenuLink
export type { MenuLinkProps }
