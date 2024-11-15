import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../../atoms/container"
import { htmlDelete, textParser } from "../../../helpers/wysiwyg-modification"
import { InView } from "react-intersection-observer"
import { GatsbyImage } from "gatsby-plugin-image"
import { slugTransform } from "../../../helpers/slug-transform"

export default function ImageSection({ changeInView, data: { title, text, imgSource, subText, image } }) {
    return (
        <Wrapper id={slugTransform(title ? htmlDelete(title) : '')}>
            <Container className="container">
                {title
                    ? <InView onChange={(inView) => { changeInView(inView, textParser(title)) }}><h2 className="h5 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} /></InView>
                    : null}
                {text
                    ? <div className="body1 text" dangerouslySetInnerHTML={{ __html: text }} />
                    : null}
                {image.localFile?.childImageSharp?.gatsbyImageData
                    ? <GatsbyImage className="image" image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
                    : <img className="image" image={image.localFile.publicURL} alt={image.altText} />}
                {imgSource
                    ? <span className="body1 source">Źródło: {imgSource}</span>
                    : null}
                {subText
                    ? <div className="body1 sub" dangerouslySetInnerHTML={{ __html: subText }} />
                    : null}
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment imageSection on WpPost_Blogpost_Sections_ImageSection {
    imageSection {
        title
        text
        imgSource
        subText
        image{
            altText
            localFile{
                publicURL
                childImageSharp{
                    gatsbyImageData
                }
            }
        }
      }
  }
`

const Wrapper = styled.section`
scroll-margin-top: 50px;
    padding-top: var(--section-post-spacing);
    /* padding-top: calc(var(--section-post-spacing) * 2);
    margin-top: calc(var(--section-post-spacing) * -1); */

    .arsenal{
    }

    .text{
        margin-top: 16px;
        column-gap: 32px;
        columns: 2;

        @media (max-width: 880px) {
            columns: 1;

            * + *{
                margin-top: 16px;
            }
        }

        p{
            color: #6F6F71;
        }
    }

    .source{
        margin-top: 8px;
        text-align: right;
        color: #6F6F71;
        display: block;
        font-size: clamp(11px, ${11 / 768 * 100}vw, 16px);
    }

    .sub{
        margin-top: 24px;
        display: grid;
        grid-gap: 8px;
        p{
            color: #6F6F71;
        }
    }

    .image{
        margin: 0 auto;
        margin-top: 32px;
        border-radius: 4px;
        box-shadow: var(--shadow);
        display: block;
        width: fit-content;
    }
`