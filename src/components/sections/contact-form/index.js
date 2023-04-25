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
                switch (type) {
                    case 'short':
                        return <div>short</div>// <ShortContactForm ip={ip} imageUnderTitle={imageUnderTitle} textUnderImage={textUnderImage} title={title} />
                    case 'standart':
                        return <div>standart</div>//<StandartContactForm ip={ip} title={title} type={type} />
                    case 'noTheme':
                        return <div>noTheme</div>//<StandartContactForm ip={ip} typTematow={typTematow} title={title} type={type} />
                    case 'addComment':
                        return <div>addComment</div>//<CommentContactForm title={title} />
                    case 'extendedWithTabs':
                        return <div>extendedWithTabs</div>//<ExtendedContactForm ip={ip} typTematow={typTematow} title={title} />
                    case 'provisionBack':
                        return <div>provisionBack</div>//<ProvisionContactForm ip={ip} title={title} />
                    default:
                        return null
                }
            })()}
        </>
    )


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