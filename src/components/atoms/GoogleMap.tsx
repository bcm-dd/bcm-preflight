import { Loader } from '@googlemaps/js-api-loader'
import { ReactElement, useEffect, useRef } from 'react'

const tailwind = require('./../../../tailwind.config')
const colors = tailwind.default.theme?.colors

interface Office {
	location?: {
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
	} | null;
	lat?: string | null;
	lng?: string | null;
}

type GoogleMapProps = Office & {
	className?: string
}

const mapStyles = [
	{
		featureType: 'administrative',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#64748B',
			},
		],
	},
	{
		featureType: 'landscape',
		elementType: 'all',
		stylers: [
			{
				color: '#f2f2f2',
			},
		],
	},
	{
		featureType: 'poi',
		elementType: 'all',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'road',
		elementType: 'all',
		stylers: [
			{
				saturation: -100,
			},
			{
				lightness: 45,
			},
		],
	},
	{
		featureType: 'road.highway',
		elementType: 'all',
		stylers: [
			{
				visibility: 'simplified',
			},
		],
	},
	{
		featureType: 'road.arterial',
		elementType: 'labels.icon',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'transit',
		elementType: 'all',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'water',
		elementType: 'all',
		stylers: [
			{
				color: '#A2ADBF',
			},
			{
				visibility: 'on',
			},
		],
	},
]

function GoogleMap({
	location,
	lng,
	lat,
	className,
}: GoogleMapProps): ReactElement | null {
	const mapRef = useRef<HTMLDivElement>(null)

	const setMarkers = (map: google.maps.Map, location: Office) => {
		const markerPin = {
			path: 'M7.7,6c2.9-2.9,6.4-4.3,10.5-4.3S25.9,3.1,28.9,6s4.4,6.4,4.4,10.5c0,2.1-0.5,4.4-1.5,7.1s-2.3,5.2-3.7,7.5c-1.5,2.3-2.9,4.5-4.4,6.5c-1.5,2-2.7,3.6-3.7,4.8l-1.6,1.7c-0.4-0.4-0.9-1-1.6-1.8s-1.8-2.3-3.5-4.6S9.9,33.2,8.6,31S6,26.4,5,23.7s-1.6-5.1-1.6-7.2C3.4,12.4,4.8,8.9,7.7,6z M14.5,20.3c1,1,2.3,1.5,3.7,1.5c1.5,0,2.7-0.5,3.8-1.5c1.1-1,1.6-2.3,1.6-3.7s-0.5-2.7-1.6-3.7c-1.1-1-2.3-1.5-3.8-1.5c-1.5,0-2.7,0.5-3.7,1.5S13,15,13,16.5S13.5,19.2,14.5,20.3z',
			fillColor: colors.primary['DEFAULT'],
			fillOpacity: 1,
			scale: 1,
			strokeColor: colors.primary['DEFAULT'],
			strokeWeight: 0,
			anchor: new google.maps.Point(14, 42),
		}

		const locationLatLng = new google.maps.LatLng(
			Number(location.lat),
			Number(location.lng)
		)
		new google.maps.Marker({
			position: locationLatLng,
			map: map,
			icon: markerPin,
		})
	}

	useEffect(() => {
		if (mapRef.current && lat && lng) {
			const loader = new Loader({
				apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
				version: 'weekly',
				libraries: ['places'],
			})

			loader.importLibrary('maps').then(({ Map }) => {
				const map = new Map(mapRef.current as unknown as HTMLElement, {
					center: {
						lat: Number(lat),
						lng: Number(lng),
					},
					zoom: 10,
					styles: mapStyles,
					disableDefaultUI: true,
				})

				setMarkers(map, {
					location,
					lat,
					lng,
				})
			})
		}
	}, [])

	return (
		<div className="relative h-120 w-full laptop:h-160">
			<div className="h-full w-full" ref={mapRef} />
		</div>
	)
}

export default GoogleMap
export type { GoogleMapProps }
