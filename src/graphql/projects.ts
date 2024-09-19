import {
	CARDS_BLOCK,
	CONTACT_FORM_BLOCK,
	IMAGE_SLIDER_BLOCK,
	MEDIA_AND_CONTENT_BLOCK,
	MEDIA_BLOCK,
	TABS_BLOCK,
} from '@graphql/blocks'
import { CATEGORIES } from '@graphql/categories'
import { LINK_FIELDS } from '@graphql/link'
import { MEDIA_FIELDS } from '@graphql/media'
import { META_FIELDS } from '@graphql/meta'

export const PROJECTS = `
  query Projects {
	Projects(limit: 300) {
	  docs {
		slug
	  }
	}
  }
`

export const PROJECT = `
  query Project($slug: String, $draft: Boolean) {
	Projects(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
	  docs {
		id
		title
		slug
		categories {title}
		thumbnail ${MEDIA_FIELDS}
		pageHead {
			type
			subhead
			title
			content
			links {
				link ${LINK_FIELDS()}
			}
			media ${MEDIA_FIELDS}
		}
		layout {
		  ${CARDS_BLOCK}
		  ${CONTACT_FORM_BLOCK}
		  ${IMAGE_SLIDER_BLOCK}
		  ${MEDIA_AND_CONTENT_BLOCK}		
		  ${MEDIA_BLOCK}
		  ${TABS_BLOCK}		
		}
		relatedProjects {
		  id
		  slug
		  title
		}
	  }
	}
  }
`
