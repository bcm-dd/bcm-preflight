import {
	CARDS_BLOCK,
	CONTACT_FORM_BLOCK,
	IMAGE_SLIDER_BLOCK,
	MEDIA_AND_CONTENT_BLOCK,
	MEDIA_BLOCK,
	TABS_BLOCK,
} from '@graphql/blocks'
import { LINK_FIELDS } from '@graphql/link'
import { MEDIA_FIELDS } from '@graphql/media'
import { META_FIELDS } from '@graphql/meta'

export const POSTS = `
  query Posts {
    Posts(limit: 300) {
      docs {
        slug
      }
    }
  }
`

export const POST = `
  query Post($slug: String, $draft: Boolean) {
    Posts(where: { slug: { equals: $slug } }, limit: 1, draft: $draft) {
      docs {
        id
        title
        slug
		categories
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
        relatedPosts {
          id
          slug
          title
        }
      }
    }
  }
`

export const BLOG = `
  query Post($limit: Int, $categories: [JSON]) {
    Posts(where: { categories: { in: $categories } }, limit: $limit) {
      docs {
        id
        title
        slug
        thumbnail ${MEDIA_FIELDS}
        categories {
          id
          title
        }
      }
      hasNextPage
      hasPrevPage
      nextPage
      prevPage
    }
  }
`

export const NEXT_POST = `
  query Post($date: DateTime, $slug: String) {
    Posts(
      where: { publishedOn: { greater_than_equal: $date }, slug: { not_equals: $slug } },
      limit: 1,
      sort: "publishedOn"
    ) {
      docs {
        slug
      }
    }
  }
`

export const PREVIOUS_POST = `
  query Post($date: DateTime) {
    Posts(
      where: { publishedOn: { less_than: $date } },
      limit: 1,
      sort: "publishedOn"
    ) {
      docs {
        slug
      }
    }
  }
`
