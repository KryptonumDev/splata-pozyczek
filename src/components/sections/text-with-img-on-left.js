import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { GatsbyImage } from "gatsby-plugin-image"
import { textParser } from './../../helpers/wysiwyg-modification'

export default function TextWithImgOnLeft({ data: { title, subTitle, tekst, imgDescription, img } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <h2 className="h4" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                    <Flex>
                        <div className="img-wrap">
                            <GatsbyImage className="img" alt={img.altText} image={img.localFile.childImageSharp.gatsbyImageData} />
                            <span className="sub1" dangerouslySetInnerHTML={{ __html: textParser(imgDescription) }} />
                        </div>
                        <div className="text">
                            <h3 className="h6" dangerouslySetInnerHTML={{ __html: textParser(subTitle) }} />
                            <div className="body1" dangerouslySetInnerHTML={{ __html: tekst }} />
                        </div>
                    </Flex>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment textWithImgOnLeft on WpPage_Blocks_pageBuilder {
    textWithImgOnLeft {
      title
      subTitle
      tekst
      imgDescription
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
    max-width: 1000px;
    margin: 0 auto;
`

const Flex = styled.div`
    margin-top: clamp(24px, ${24 / 768 * 100}vw, 48px);
    display: grid;
    grid-template-columns: clamp(300px, ${300 / 1024 * 100}vw, 380px) 1fr;
    align-items: center;
    grid-gap: 32px;

    @media (max-width: 860px) {
        align-items: unset;
    }

    @media (max-width: 680px) {
        grid-template-columns: 1fr;
        grid-gap: 16px;
    }

    .img-wrap{
        min-width: 300px;
        max-width: 380px;
        width: 100%;

        .sub1{
            display: block;
            margin-top: 8px;
        }
    }

    .img{
        border-radius: 4px;
        box-shadow: var(--shadow);
        width: 100%;
    }

    .text{
        .h6{
            margin-bottom: clamp(8px, ${12 / 768 * 100}vw, 16px);
        }

        .body1{
            display: grid;
            grid-gap: clamp(12px, ${12 / 768 * 100}vw, 16px);
        }
    }
`