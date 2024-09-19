import { Link } from '@types'

const getLinkUrl = (link: Link): string => {
	if (link.type === 'reference') {
		if (!link.reference) {
			return ''
		}

		if (typeof link.reference.value === 'string') {
			return ''
		}

		if (link.reference.relationTo === 'projects') {
			return `/project/${link.reference.value?.slug}`
		}

		if (link.reference.relationTo === 'posts') {
			return `/posts/${link.reference.value?.slug}`
		}

		if (link.reference.value?.slug === 'home') {
			return '/'
		}

		return `/${link.reference.value?.slug}`
	}

	return link.url ? link.url : ''
}

export default getLinkUrl
