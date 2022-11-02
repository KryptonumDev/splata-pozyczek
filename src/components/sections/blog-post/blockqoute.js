import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../../atoms/container"
import { textParser } from "../../../helpers/wysiwyg-modification"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Blockqoute({ data: { image, cite, author } }) {
    return (
        <Wrapper>
            <Container className="container">
                <Box>
                    <GatsbyImage className="image" image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
                    <div className="text">
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 27.744C2.176 25.824 3.968 23.552 5.376 20.928C6.784 18.304 7.52 15.776 7.584 13.344H6.912C5.12 13.344 3.584 12.768 2.304 11.616C1.024 10.336 0.384 8.704 0.384 6.72C0.384 4.672 1.024 3.008 2.304 1.728C3.584 0.576 5.12 0 6.912 0C8.64 0 10.176 0.576 11.52 1.728L11.808 2.112C13.344 3.84 14.112 6.272 14.112 9.408C14.112 13.12 13.056 17.088 10.944 21.312C8.896 25.472 6.368 28.8 3.36 31.296L0 27.744ZM17.952 27.744C20.128 25.824 21.92 23.552 23.328 20.928C24.736 18.304 25.472 15.776 25.536 13.344H24.864C23.008 13.344 21.472 12.768 20.256 11.616C18.976 10.336 18.336 8.704 18.336 6.72C18.336 4.672 18.976 3.008 20.256 1.728C21.472 0.576 23.008 0 24.864 0C26.592 0 28.128 0.576 29.472 1.728L29.76 2.112C31.296 3.84 32.064 6.272 32.064 9.408C32.064 13.12 31.008 17.088 28.896 21.312C26.848 25.472 24.32 28.8 21.312 31.296L17.952 27.744Z" fill="#DAE2FF" />
                        </svg>
                        <figure>
                            <blockquote className="body1" dangerouslySetInnerHTML={{ __html: textParser(cite) }} />
                            <figcaption className="sub1">
                                {author}
                            </figcaption>
                        </figure>
                    </div>
                </Box>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment blockqoute on WpPost_Blogpost_Sections_Blockqoute {
    blockqoute {
        cite
        author
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
    padding-top: var(--section-post);
`

const Box = styled.div`
    padding: 8px;
    border-radius: 4px;
    box-shadow: var(--shadow);
    display: grid;
    grid-template-columns: auto auto;
    gap: 8px;

    @media (max-width: 840px){
        padding: 16px 12px;
    }

    @media (max-width: 580px){
        grid-template-columns: auto 1fr;

        svg{
            width: 24px;
            height: 24px;
        }

        blockquote{
            font-size: 14px;
        }

        figcaption{
            font-size: 14px;
        }
    }

    @media (max-width: 340px){
        grid-template-columns: 1fr;
    }

    .text{
        display: grid;
        grid-gap: 10px;
        grid-template-columns: 32px 1fr;
        padding: 16px 10px;

        @media (max-width: 840px) {
            padding: 0;
            grid-template-columns: 1fr;
            grid-gap: 6px;
            height: fit-content;
        }
        @media (max-width: 764px){
            padding: 16px 10px;
            grid-gap: 10px;
            grid-template-columns: 32px 1fr;
        }
        @media (max-width: 580px){
            padding: 0;
            grid-template-columns: 1fr;
            grid-gap: 6px;
        }
    }

    .image{
        border-radius: 4px;
        box-shadow: var(--shadow);
        width: 184px;
        height: fit-content;
        min-width: 140px;

        @media (max-width: 580px){
            width: auto;
            max-width: 140px;
            min-width: unset;
        }
    }

    .sub1{
        color: var(--color-medium);
        margin-top: 4px;
    }
`