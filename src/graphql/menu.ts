import { LINK_FIELDS } from './link'

export const MENU_FIELDS = `
menuItem {
  type 
  label
  link ${LINK_FIELDS({ disableSize: true })}
  submenu {
    submenuItem {
        ... on MenuLink {
            link ${LINK_FIELDS({ disableSize: true })}           
        }
    }
  }
}
`
