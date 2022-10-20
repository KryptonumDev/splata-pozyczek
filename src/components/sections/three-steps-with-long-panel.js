import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'
import Arrow from './../../images/arrow-right.svg'
import ArrowLight from './../../images/arrow-right-light.svg'

export default function ThreeStepsWithLongPanel({ data: { title, text, steps, longPanel } }) {
    return (
        <Wrapper>
            <Container>
                <h2 className="h4" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                <h2 className="h6" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                <Grid>
                    {steps.map((el, index) => (
                        <Item arrow={Arrow} arrowLight={ArrowLight}>
                            <span className="h4">{index + 1}</span>
                            <div className="content" dangerouslySetInnerHTML={{ __html: el.content }} />
                        </Item>
                    ))}
                </Grid>
                <LongPanel className="desctop">
                    <img src={longPanel.icon.localFile.publicURL} alt={longPanel.icon.altText} />
                    <div className="wrap">
                        <span className="body1" dangerouslySetInnerHTML={{ __html: textParser(longPanel.title) }} />
                        <div className="body2 text" dangerouslySetInnerHTML={{ __html: longPanel.text }} />
                    </div>
                </LongPanel>
                <LongPanel className="mobile">
                    <div className="wrap">
                        <img src={longPanel.icon.localFile.publicURL} alt={longPanel.icon.altText} />
                        <span className="body1" dangerouslySetInnerHTML={{ __html: textParser(longPanel.title) }} />
                    </div>
                    <div className="body2 text" dangerouslySetInnerHTML={{ __html: longPanel.text }} />
                </LongPanel>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment threeStepsWithLongPanel on WpPage_PageBuilder_Sections_ThreeStepsWithLongPanel {
    threeStepsWithLongPanel {
      title
      text
      steps {
        content
      }
      longPanel {
        title
        text
        icon {
          altText
          localFile {
            publicURL
          }
        }
      }
    }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);

    .h4{
        max-width: 762px;
        margin: 0 auto 24px auto;
        text-align: center;
    }

    .h6{
        padding: 10px 24px;
        max-width: 600px;
        margin: 0 auto 48px auto;
        text-align: center;
        border-radius: 4px;
        box-shadow: var(--shadow);
        background-color: var(--color-light);
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        max-width: 576px;
        margin: 0 auto;
    }
`

const Item = styled.div`
    padding: clamp(16px, ${24 / 768 * 100}vw, 32px);
    border-radius: 4px;
    box-shadow: var(--shadow);
    background-color: var(--color-light);

    span{
        width: clamp(48px, ${48 / 768 * 100}vw, 76px);
        height: clamp(48px, ${48 / 768 * 100}vw, 76px);
        border-radius: 50%;
        background-color: var(--color-light);
        color: var(--color-medium);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: var(--shadow);
        margin-bottom: 12px;
        
        font-family: 'Arsenal';
    }

    .content{
        display: grid;
        grid-gap: 16px;

        ul{
            display: grid;
            grid-gap: 12px;
            li{
                list-style: none;
                padding-left: 28px;
                position: relative;

                &::before{
                    content: url(${props => props.arrow});
                    position: absolute;
                    left: 0;
                    top: 0; 
                }
            }
        }
    }

    &:first-child{
        background-color: var(--color-medium);

        span{
            background-color: #00225A;
            color: var(--color-medium);
        }

        .content ul li::before{
            content: url(${props => props.arrowLight});
        }

        *{
            color: #F2F4FF;
        }
    }
`

const LongPanel = styled.div`
    margin-top: 24px;
    padding: 10px;
    box-shadow: var(--shadow);
    display: grid;
    border-radius: 4px;
    grid-template-columns: auto auto;
    
    img{
        width: clamp(48px, ${48 / 768 * 100}vw, 76px);
        height: clamp(48px, ${48 / 768 * 100}vw, 76px);

    }

    .body1{
        font-weight: 600;
        margin-bottom: 4px;
    }

    .text{
        columns: 2;
        column-gap: 24px;

        p{
            color: #6F6F71;
            break-inside: avoid;
        }
    }

    .wrap{
        padding: 10px;
    }

    &.mobile{
        display: none;
    }

    @media (max-width: 768px) {
        &.desctop{
            display: none;
        }

        &.mobile{
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 4px;
            padding: clamp(16px, ${18 / 768 * 100}vw, 18px) clamp(16px, ${28 / 768 * 100}vw, 28px);
            
            .wrap{
                display: flex;
                align-items: center;
                padding: 0;

                img{
                    margin-right: 4px;
                }
            }
        }
    }

    @media (max-width: 480px) {
        .text{
            display: grid;
            grid-gap: 8px;
        }
    }
`