'use client'
import { Media, TabsBlock as TabsBlockType } from '@types'
import { ReactElement, useState } from 'react'
import Section from '@components/atoms/Section'
import clsx from 'clsx'
import TabButton from '@components/atoms/TabButton'
import { AnimatePresence, motion } from 'framer-motion'
import TabPanel from '@components/molecules/TabPanel'
type TabsBlockProps = TabsBlockType & {
	className?: string
}

type Tab = {
	label: string
	richText?: {
		root: {
			children: {
				type: string
				version: number
				[k: string]: unknown
			}[]
			direction: ('ltr' | 'rtl') | null
			format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
			indent: number
			type: string
			version: number
		}
		[k: string]: unknown
	} | null
	accordions?:
		| {
				title: string
				richText?: {
					root: {
						children: {
							type: string
							version: number
							[k: string]: unknown
						}[]
						direction: ('ltr' | 'rtl') | null
						format:
							| 'left'
							| 'start'
							| 'center'
							| 'right'
							| 'end'
							| 'justify'
							| ''
						indent: number
						type: string
						version: number
					}
					[k: string]: unknown
				} | null
				id?: string | null
		  }[]
		| null
	media?: string | Media | null
	id?: string | null
}

function TabsBlock({
	blockType,
	tabsBlockFields,
	className,
}: TabsBlockProps): ReactElement {
	const { tabs, anchorId } = tabsBlockFields

	const classes = clsx(blockType, className)
	const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0])

	return (
		<Section className={classes} htmlId={anchorId}>
			<div className="border-dark-100 border-b border-solid" role="tablist">
				<div className="no-scrollbar relative -mb-5 overflow-x-auto overflow-y-hidden whitespace-nowrap pb-5 laptop:whitespace-normal">
					<div className="space-x-6 laptop:flex laptop:justify-center">
						{tabs.map((tab) => {
							return (
								<TabButton
									key={tab.label}
									label={tab.label}
									isActive={tab === selectedTab}
									onClick={() => setSelectedTab(tab)}
								>
									{tab === selectedTab ? (
										<motion.div
											className="absolute inset-x-0 -bottom-px h-0.5 bg-dark"
											layoutId="underline"
										/>
									) : null}
								</TabButton>
							)
						})}
					</div>
				</div>
			</div>
			<AnimatePresence mode="wait">
				<motion.div
					key={selectedTab ? selectedTab.label : 'empty'}
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -10, opacity: 0 }}
					transition={{ duration: 0.2 }}
				>
					<TabPanel {...selectedTab} />
				</motion.div>
			</AnimatePresence>
		</Section>
	)
}

export default TabsBlock
export type { Tab }
