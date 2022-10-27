import React from "react"
import { graphql } from "gatsby"
import ShortContactForm from "./short-contact-form"
import StandartContactForm from "./standart-contact-form"
import ExtendedContactForm from "./extended-contact-form"
import CommentContactForm from "./add-comment-form"
import ProvisionContactForm from "./provision-contact-form"

export default function ContactForm({ data: { title, type } }) {
    switch (type) {
        case 'short':
            return <ShortContactForm title={title} />
        case 'standart':
            return <StandartContactForm title={title} type={type} />
        case 'noTheme':
            return <StandartContactForm title={title} type={type} />
        case 'addComment':
            return <CommentContactForm title={title} />
        case 'extendedWithTabs':
            return <ExtendedContactForm title={title} />
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
    }
}
`