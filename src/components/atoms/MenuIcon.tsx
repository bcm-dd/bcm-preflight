import React, { useState, useEffect } from 'react'

interface MenuIconProps {
	onToggle: () => void
	open: boolean
}

const MenuIcon: React.FC<MenuIconProps> = ({ onToggle, open }) => {
	const [isX, setIsX] = useState(open)

	useEffect(() => {
		setIsX(open)
	}, [open])

	const handleClick = () => {
		onToggle()
	}

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlSpace="preserve"
			style={{
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				strokeLinejoin: 'round',
				strokeMiterlimit: 2,
			}}
			viewBox="0 0 509 356"
			className="group h-12 cursor-pointer overflow-visible"
			onClick={handleClick}
		>
			<path
				style={{
					transformBox: 'content-box',
				}}
				className={[
					'origin-center fill-primary transition',
					isX ? 'translate-y-[113px] -rotate-45' : 'group-hover:translate-y-6',
				]
					.filter(Boolean)
					.join(' ')}
				d="M441.609,132.259l-377.104,0c-35.6,0 -64.463,-28.858 -64.463,-64.462c0,-35.6 28.863,-64.463 64.463,-64.463l377.104,0c35.6,0 64.463,28.863 64.463,64.463c-0,35.604 -28.863,64.462 -64.463,64.462"
			/>
			<path
				style={{
					transformBox: 'content-box',
				}}
				className={[
					'origin-center fill-primary transition',
					isX ? '-translate-y-[113px] rotate-45' : 'group-hover:-translate-y-6',
				]
					.filter(Boolean)
					.join(' ')}
				d="M441.609,358.152l-377.104,-0c-35.6,-0 -64.463,-28.858 -64.463,-64.463c0,-35.6 28.863,-64.462 64.463,-64.462l377.104,-0c35.6,-0 64.463,28.862 64.463,64.462c-0,35.605 -28.863,64.463 -64.463,64.463"
			/>
		</svg>
	)
}

export default MenuIcon
