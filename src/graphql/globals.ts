import { MENU_FIELDS } from '@graphql/menu'
import { LINK_FIELDS } from '@graphql/link'

export const GLOBALS = `
  query {  
    Header {
        mainMenu {
          ${MENU_FIELDS}
        }
    }
    Footer {
        footerRichText
        footerMenu {
             ${MENU_FIELDS}
        }               
        legalsMenu {
             ${MENU_FIELDS}
        }
    }
    Contact {   
        contactDetails {
            primaryEmail 
            contactPhone
            businessName
            businessABN
            location
            lat
            lng
            businessHours {
              dayOfWeek
              openingHours
            }
        }
        socialMedia {
            socialLinks {
                label
                url
            }
        }
    }        
  }
`

export const CONTACT = `
  query {  
    Contact {   
        contactDetails {
            primaryEmail 
            contactPhone
            businessName
            businessABN
            location
            lat
            lng
            businessHours {
              dayOfWeek
              openingHours
            }
        }
        socialMedia {
            socialLinks {
                label
                url
            }
        }
    }        
  }
`