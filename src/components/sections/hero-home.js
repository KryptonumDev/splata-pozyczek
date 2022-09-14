import React from "react"
import styled from "styled-components"
import { Container } from "./../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'
import { FilledButton, OutlinedButton } from "./../atoms/buttons"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

export default function Hero({ data: { text, pageTitle, przyciski, background } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <TextPart>
                        {// breadcrumbs
                        }
                        <h1 className="h4" dangerouslySetInnerHTML={{ __html: textParser(pageTitle) }}></h1>
                        <p className="h6" dangerouslySetInnerHTML={{ __html: textParser(text) }}></p>
                        <Buttons>
                            {przyciski.map((el, index) => {
                                if (index === 0) {
                                    return <FilledButton key={el.name} to={el.url}>{el.name}</FilledButton>
                                }
                                return <OutlinedButton key={el.name} to={el.url}>{el.name}</OutlinedButton>
                            })}
                        </Buttons>
                    </TextPart>
                    <GatsbyImage className="background" image={background.localFile.childImageSharp.gatsbyImageData} alt={background.altText} />
                </Content>
            </Container>
        </Wrapper>
    )
}


export const query = graphql`
  fragment hero on WpPage_Blocks_pageBuilder {
    hero {
      pageTitle
      text
      przyciski {
        url
        name
      }
      background {
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
    .background{
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: -1;

        @media (max-width: 1023px) {
            right: -60px;
        }

        @media (max-width: 900px) {
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            right: unset;
            bottom: unset;
        }

        @media (max-width: 640px) {
            margin-top: 25px;
            width: calc(100% + clamp(32px, ${48 / 768 * 100}vw, 160px));
        }
    }
`

const Content = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding-bottom: 160px;
    position: relative;

    @media (max-width: 900px){
        padding-bottom: 0;
    }
`

const TextPart = styled.div`
    max-width: 485px;

    @media (max-width: 900px){
        max-width: 720px;
    }

    .h6{
        color: #75757A;
        margin-top: clamp(8px, ${10 / 768 * 100}vw, 12px);
    }
`

const Buttons = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    width: fit-content;
    gap: 16px;
    margin-top: clamp(16px, ${20 / 768 * 100}vw, 24px);

    @media (max-width: 450px) {
        grid-template-columns: auto;
        width: 100%;
        gap: 8px;

        a{
            width: 100%;
            text-align: center;
            box-sizing: border-box;
        }
    }
`