import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import ShortContactForm from "./short-contact-form"
import StandartContactForm from "./standart-contact-form"
import ExtendedContactForm from "./extended-contact-form"
import CommentContactForm from "./add-comment-form"
import ProvisionContactForm from "./provision-contact-form"
import axios from "axios"

export default function ContactForm({ data: { imageUnderTitle, textUnderImage, typTematow, title, type } }) {

    const [ip, setIP] = useState('')

    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        setIP(res.data.IPv4)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {(() => {
                return <StandartContactForm ip={ip} title={title} type={type} />
            })()}
        </>
    )

    switch (type) {
        case 'short':
            return <ShortContactForm ip={ip} imageUnderTitle={imageUnderTitle} textUnderImage={textUnderImage} title={title} />
        case 'standart':
            return <StandartContactForm ip={ip} title={title} type={type} />
        case 'noTheme':
            return <StandartContactForm ip={ip} typTematow={typTematow} title={title} type={type} />
        case 'addComment':
            return <CommentContactForm title={title} />
        case 'extendedWithTabs':
            return <ExtendedContactForm ip={ip} typTematow={typTematow} title={title} />
        case 'provisionBack':
            return <ProvisionContactForm ip={ip} title={title} />
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