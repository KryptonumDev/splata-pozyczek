import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'
import { GatsbyImage } from "gatsby-plugin-image"

export default function TextWithImgOnLeftAlt({ data: { title, text, img } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <GatsbyImage className="img" image={img.localFile.childImageSharp.gatsbyImageData} alt={img.altText} />
                    <div>
                        <h2 className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                        <div className="body2" dangerouslySetInnerHTML={{ __html: text }} />
                    </div>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment textWithImgOnLeftAlt on WpPage_Blocks_pageBuilder {
    textWithImgOnLeftAlt {
      title
      text
      img {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);
`

const Content = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    grid-gap: clamp(12px, ${24 / 768 * 100}vw, 32px);
    max-width: 1000px;
    margin: 0 auto;

    .img{
        box-shadow: var(--shadov);
        border-radius: 4px;
        width: clamp(400px, ${400 / 768 * 100}vw, 587px);
    }

    .body2{
        display: grid;
        grid-gap: 16px;
        margin-top: clamp(8px, ${12 / 768 * 100}vw, 16px);
        *{
            color: #6F6F71;
        }
    }

    @media (max-width: 864px) {
        grid-template-columns: 1fr;
        max-width: 800px;
        margin: 0 auto;

        .h6{
            width: 50%;
        }

        .body2{
            columns: 2;
                display: block;
                column-gap: 24px;

            p{
                break-inside: avoid;
                margin-top: 8px;

                &:first-child{
                    margin-top: 0;
                }
            }
        }

        .img{
            width: 100%;
        }
    }

    @media (max-width: 640px) {
        .h6{
            width: 100%;
        }
    }

    @media (max-width: 480px) {
        .body2{
            display: grid;
            grid-gap: 12px;

            p{
                margin-top: 0;
            }
        }
    }
`