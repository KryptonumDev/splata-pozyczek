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
    }
`

const Content = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding-bottom: 160px;
    position: relative;
`

const TextPart = styled.div`
    max-width: 485px;

    .h6{
        color: #75757A;
        margin-top: 24px;
    }
`

const Buttons = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    width: fit-content;
    gap: 16px;
    margin-top: 24px;
`