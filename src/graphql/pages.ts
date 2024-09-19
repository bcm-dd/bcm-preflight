import {
	ARCHIVE_BLOCK,
	CARDS_BLOCK,
	CONTACT_FORM_BLOCK,
	IMAGE_SLIDER_BLOCK,
	MEDIA_AND_CONTENT_BLOCK,
	MEDIA_BLOCK,
	PROJECT_GRID,
	TABS_BLOCK,
} from '@graphql/blocks'
import { LINK_FIELDS } from '@graphql/link'
import { MEDIA_FIELDS } from '@graphql/media'
import { META_FIELDS } from '@graphql/meta'

export const PAGES = `
  query Pages {
    Pages(limit: 300) {
      docs {
        slug
        breadcrumbs {
          url
          label
        }
      }
    }
  }
`

export const PAGE = `
  query Page($slug: String ) {
    Pages(where: { slug: { equals: $slug} }, draft: true) {
      docs {
        id
        title
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
        	${ARCHIVE_BLOCK}
        	${CARDS_BLOCK}
        	${CONTACT_FORM_BLOCK}
        	${IMAGE_SLIDER_BLOCK}
        	${MEDIA_AND_CONTENT_BLOCK}		
        	${MEDIA_BLOCK}
        	${PROJECT_GRID}
        	${TABS_BLOCK}		
        }
        breadcrumbs {
          url
          label
        }
      }
    }
  }
`
