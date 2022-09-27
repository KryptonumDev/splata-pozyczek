import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'
import { GatsbyImage } from "gatsby-plugin-image"
import { FilledButton } from "../atoms/buttons"

export default function TextWithImgOnRight({ data: { title, text, boldText, link, image } }) {
  return (
    <Wrapper>
      <Container className="container">
        <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
        <Content>
          <div>
            <div className="text body2" dangerouslySetInnerHTML={{ __html: text }} />
            <h3 className="h6" dangerouslySetInnerHTML={{ __html: textParser(boldText) }} />
            <FilledButton className="link" target={link.target} to={link.url}>{link.title}</FilledButton>
          </div>
          <GatsbyImage className="image" image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
        </Content>
      </Container>
    </Wrapper>
  )
}

export const query = graphql`
  fragment textWithImgOnRight on WpPage_Blocks_pageBuilder {
    textWithImgOnRight {
      title
      text
      link {
        url
        title
        target
      }
      boldText
      image {
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

    .arsenal{
      max-width: 668px;
      font-size: clamp(28px, 4.296875vw, 38px);
    }

    .container{
      max-width: 1000px;
    }
`

const Content = styled.div`
    margin-top: clamp(24px, ${32 / 768 * 100}vw, 40px);
    display: grid;
    grid-template-columns: auto clamp(340px, ${340 / 1024 * 100}vw, 380px);
    align-items: center;
    grid-gap: 32px;

    @media (max-width: 1024px) {
      align-items: flex-start;
    }

    @media (max-width: 767px) {
      display: flex;
      gap: 0;
      flex-direction: column-reverse;
      max-width: 600px;
    }

    .text{
        display: grid;
        margin-top: clamp(12px, ${12 / 768 * 100}vw, 16px);
        margin-bottom: 8px;
        
        p{
          color: #6F6F71;
        }

        p:nth-child(3){
            font-weight: 400;
            font-size: 16px;
            line-height: 131%;
            font-feature-settings: 'pnum' on, 'onum' on;
            color: #050505;
        }
    }

    .h6{
          color: #6F6F71;
    }

    .link{
      margin-top: clamp(8px, ${12 / 768 * 100}vw, 16px);

      @media (max-width: 480px) {
        width: 100%;
        padding: 12px;
        text-align: center;
      }  
    }

    .image{
      border-radius: 4px;
      box-shadow: var(--shadow);

      @media (max-width: 767px){
        margin-bottom: 16px;
      }
    }
`