import React from "react"
import styled from "styled-components"
import { Container } from "./../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'
import { FilledButton, OutlinedButton } from "./../atoms/buttons"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

export default function Hero({ data: { text, pageTitle, przyciski, background } }) {
    debugger
    return (
        <Wrapper>
            <Container>
                <Content>
                    <TextPart>
                        <h1 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(pageTitle) }}></h1>
                        <p className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(text) }}></p>
                        <Buttons>
                            {przyciski.map((el, index) => {
                                if (index === 0) {
                                    return <FilledButton target={el.link.target} key={el.link.title} to={el.link.url}>{el.link.title}</FilledButton>
                                }
                                return <OutlinedButton target={el.link.target} key={el.link.title} to={el.link.url}>{el.link.title}</OutlinedButton>
                            })}
                        </Buttons>
                    </TextPart>
                    <img className="background" src={background.localFile.publicURL} alt={background.altText} />
                    {/* <GatsbyImage className="background" image={background.localFile.childImageSharp.gatsbyImageData} alt={background.altText} /> */}
                </Content>
            </Container>
        </Wrapper>
    )
}


export const query = graphql`
  fragment hero on WpPage_PageBuilder_Sections_Hero {
    hero : sekcjaPowitalnaNaStronieGlownej {
      pageTitle
      text
      przyciski {
        link{
            url
            title
            target
        }
      }
      background {
        altText
        localFile {
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
    margin-bottom: calc(-1 * var(--section));

    @media (max-width: 900px) {
        margin-bottom: calc(-100px + (-1 * var(--section)));
    }

    @media (max-width: 480px) {
        margin-bottom: calc(-1 * var(--section));
    }

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

        
        .h4{
            font-weight: 700;
            font-size: clamp(33px, ${54 / 900 * 100}vw, 54px);
            line-height: 111%;
            letter-spacing: -0.02em;
            max-width: 74%;
        }
    }

    @media (max-width: 480px) {
        .h4{
            max-width: 350px;
        }
    }
`

const TextPart = styled.div`
    max-width: 485px;

    @media (max-width: 900px){
        max-width: 720px;
    }

    .h6{
        color: #6F6F71;
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