import React from "react"
import { graphql } from "gatsby"
import ShortContactForm from "./short-contact-form"
import StandartContactForm from "./standart-contact-form"
import ExtendedContactForm from "./extended-contact-form"
import CommentContactForm from "./add-comment-form"
import ProvisionContactForm from "./provision-contact-form"

export default function ContactForm({ data: { imageUnderTitle, textUnderImage, typTematow, title, type } }) {
    switch (type) {
        case 'short':
            return <ShortContactForm imageUnderTitle={imageUnderTitle} textUnderImage={textUnderImage} typTematow={typTematow} title={title} />
        case 'standart':
            return <StandartContactForm typTematow={typTematow} title={title} type={type} />
        case 'noTheme':
            return <StandartContactForm typTematow={typTematow} title={title} type={type} />
        case 'addComment':
            return <CommentContactForm title={title} />
        case 'extendedWithTabs':
            return <ExtendedContactForm typTematow={typTematow} title={title} />
        case 'provisionBack':
            return <ProvisionContactForm title={title} />
        default:
            return null
    }
}

export const query = graphql`
fragment contactForm on WpPage_PageBuilder_Sections_ContactForm {
    contactForm {
      title
      type
      typTematow
      imageUnderTitle{
        altText
        localFile{
            childImageSharp{
                gatsbyImageData
            }
        }
      }
      textUnderImage
    }
}
`