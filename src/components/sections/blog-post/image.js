import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../../atoms/container"
import { textParser } from "../../../helpers/wysiwyg-modification"
import { GatsbyImage } from "gatsby-plugin-image"

export default function ImageSection({ data: { title, text, imgSource, subText, image } }) {
    return (
        <Wrapper id={textParser(title)}>
            <Container className="container">
                <h2 className="h5 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                {text
                    ? <div className="body1 text" dangerouslySetInnerHTML={{ __html: text }} />
                    : null}
                <GatsbyImage className="image" image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
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
                childImageSharp{
                    gatsbyImageData
                }
            }
        }
      }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section-post);
    .arsenal{
    }

    .text{
        margin-top: 16px;
        column-gap: 32px;
        columns: 2;

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

    .source{
        margin-top: 8px;
        text-align: right;
        color: #6F6F71;
        display: block;
    }

    .sub{
        margin-top: 24px;
        p{
            color: #6F6F71;
        }
    }
`