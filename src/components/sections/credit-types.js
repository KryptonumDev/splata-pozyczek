import React, { useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'
import { GatsbyImage } from "gatsby-plugin-image"
import { FilledButton, OutlinedButton } from "../atoms/buttons"

export default function CreditTypes({ data: { title, tekst, slider } }) {

    const [active, setActive] = useState(0)

    return (
        <Wrapper>
            <Container>
                <Content>
                    <h2 className="h4" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                    <p className="h6 text" dangerouslySetInnerHTML={{ __html: textParser(tekst) }} />
                    <ControlWrap>
                        <Control>
                            {slider.map((el, index) => (
                                <button className={index === active ? 'active' : ''} onClick={() => { setActive(index) }}><span>{el.tabName}</span></button>
                            ))}
                        </Control>
                    </ControlWrap>
                    <InnerContent>
                        <Grid count={slider.length}>
                            {slider.map((el, index) => (
                                <Item className={index === active ? 'active' : ''}>
                                    <GatsbyImage className="image" image={el.obrazekPoLewej.localFile.childImageSharp.gatsbyImageData} alt={el.altText} />
                                    <div>
                                        <h3 className="h6" dangerouslySetInnerHTML={{ __html: textParser(el.title) }} />
                                        <div className="body2" dangerouslySetInnerHTML={{ __html: el.text }} />
                                        <div className="buttons">
                                            {el.przyciski.map((el, index) => {
                                                if (index) {
                                                    return <OutlinedButton target={el.link.target} to={el.link.url}>{el.link.title}</OutlinedButton>
                                                }
                                                return <FilledButton target={el.link.target} to={el.link.url}>{el.link.title}</FilledButton>
                                            })}
                                        </div>
                                    </div>
                                </Item>
                            ))}
                        </Grid>
                    </InnerContent>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment creditTypes on WpPage_Blocks_pageBuilder {
    creditTypes {
      title
      tekst
      slider {
        tabName
        title
        text
        przyciski {
          link {
            url
            title
            target
          }
        }
        obrazekPoLewej {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);
`

const ControlWrap = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    overflow: hidden;

    @media (max-width: 1208px) {
        margin: 0 68px;
    }
`

const Control = styled.div`
    display: flex;
    gap: 4px;
    width: max-content;

    button{
        padding: 6px;
        border: none;
        background-color: transparent;

        span{
            display: block;
            padding: 0 24px 8px 24px;
            position: relative;

            &::after{
                content: "";
                position: absolute;
                height: 1px;
                width: 100%;
                left: 0;
                bottom: 0;
                right: 0;
                background-color: #B2B2B8;
            }
        }

        &.active{
            span{
                background: linear-gradient(315deg, #987003 0%, #EABE69 99.99%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
                font-weight: 600;

                &::after{
                    background: linear-gradient(315deg, #987003 0%, #EABE69 99.99%);
                    height: 2px;
                }
            }
        }
    }
`

const Content = styled.div`
    max-width: 1136px;
    margin: 0 auto;
    overflow: hidden;

    .h4{
        text-align: center;
    }

    .text{
        max-width: 540px;
        margin: 0 auto;
        text-align: center;
        color: #75757A;
        margin-top: 24px;
        margin-bottom: 48px;

        strong{
            color: #050505;
        }
    }
`

const InnerContent = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    overflow: hidden;
`

const Grid = styled.div`
    display: grid;
    padding-top: 32px;
`

const Item = styled.div`
    display: grid;
    grid-template-columns: 1fr clamp(300px, ${300 / 768 * 100}vw, 380px);
    grid-gap: 32px;
    position: absolute;
    opacity: 0;
    pointer-events: none;

    &.active{
        pointer-events: all;
        opacity: 1;
        position: relative;
    }

    .image{
        height: fit-content;
        border-radius: 4px;
        box-shadow: var(--shadow);
    }

    .body2{
        margin-top: 16px;
        display: grid;
        grid-gap: 16px;
        p{
            color: #6F6F71;
        }
    }

    .buttons{
        margin-top: 16px;
        display: grid;
        grid-gap: 8px;
    }
`