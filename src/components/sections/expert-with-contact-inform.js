import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { GatsbyImage } from "gatsby-plugin-image"
import { textParser } from "../../helpers/wysiwyg-modification"

export default function ExpertWithContactInform({ data: { expert, title, text, image } }) {
    return (
        <Wrapper>
            <Container>
                <Flex>
                    <GatsbyImage className="image" image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
                    <TextPart>
                        <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                        <div className="body1 text" dangerouslySetInnerHTML={{ __html: text }} />
                        <p className="body1 title">{expert.title}</p>
                        <p className="body2 role">{expert.ekspert.role}</p>
                        <p className="body1 product">{expert.ekspert.workWithProducts}</p>
                        <p className="h6 arsenal tel">Napisz: <a href={'tel:' + expert.ekspert.numerTelefonu}>{expert.ekspert.numerTelefonu}</a></p>
                        <p className="h6 arsenal mail">Zadzwoń: <a href={'mailto:' + expert.ekspert.emailAdres}>{expert.ekspert.emailAdres}</a></p>
                    </TextPart>
                </Flex>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment expertWithContactInform on WpPage_PageBuilder_Sections_ExpertWithContactInform {
    expertWithContactInform {
        image{
            altText
            localFile{
                childImageSharp{
                    gatsbyImageData
                }
            }
        }
        title
        text
        expert {
          ... on WpEkspert {
            id
            title
            ekspert {
              role
              workWithProducts
              numerTelefonu
              emailAdres
            }
          }
        }
      }
  }
`

const TextPart = styled.div`

    .text{
        margin-top: 16px;

        @media (max-width: 768px){
            margin-top: 12px;
        }
        p{
            color: #6F6F71;
        }
    }

    .title{
        margin-top: 16px;
    }

    .role{

    }

    .product{
        font-weight: 600;
        
    }

    .mail{
        margin-top: 8px;
    }

    .tel{
        margin-top: 8px;
    }
`

const Wrapper = styled.section`
    margin-top: var(--section);

    .image{
        border-radius: 4px;
        box-shadow: var(--shadow);

        @media (max-width: 580px){
            width: fit-content;
        }
    }
`

const Flex = styled.div`
    max-width: var(--inner-container-width);
    margin: 0 auto;
    display: grid;
    align-items: center;
    grid-template-columns: 381fr 587fr;
    grid-gap: 32px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 580px) {
        grid-template-columns: 1fr;
        grid-gap: 16px;
    }
`
