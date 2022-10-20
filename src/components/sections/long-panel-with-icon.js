import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'

export default function LongPanelWithIcon({ data: { template, longPanel } }) {
    return (
        <Wrapper>
            <Container>
                <Grid template={template}>
                    {longPanel.map(el => (
                        <>
                            <Content template={template} className="desctop">
                                <img src={el.icon.localFile.publicURL} alt={el.icon.altText} />
                                <div className="text">
                                    <h2 className="body1 title" dangerouslySetInnerHTML={{ __html: textParser(el.title) }} />
                                    <div className="body1 sub" dangerouslySetInnerHTML={{ __html: el.text }} />
                                </div>
                            </Content>
                            <Content className="mobile">
                                <div className="text">
                                    <img src={el.icon.localFile.publicURL} alt={el.icon.altText} />
                                    <h2 className="body1 title" dangerouslySetInnerHTML={{ __html: textParser(el.title) }} />
                                </div>
                                <div className="body1 sub" dangerouslySetInnerHTML={{ __html: el.text }} />
                            </Content>
                        </>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment longPanelWithIcon on WpPage_PageBuilder_Sections_LongPanelWithIcon  {
    longPanelWithIcon {
      template
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

const Grid = styled.div`
    display: grid;
    grid-gap: clamp(24px, ${24 / 768 * 100}vw, 32px);

    ${props => props.template === 'long' ? `

    ` : props.template === 'longDoubled' ? `
    
    ` : props.template === 'medium' ? `
        grid-template-columns: 1fr 1fr;

        @media(max-width: 1024px){
            grid-template-columns: 1fr;
        }

    ` : null}
`

const Wrapper = styled.section`
    margin-top: var(--section);
`

const Content = styled.div`
    display: none;
    grid-template-columns: auto auto;
    padding: 10px;
    border-radius: 4px;
    box-shadow: var(--shadow);

    &.desctop{
        display: grid;
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
            
            .text{
                display: flex;
                align-items: center;
                padding: 0;

                img{
                    margin-right: 4px;
                }
            }
        }
    }

    img{
        width: clamp(48px, ${48 / 768 * 100}vw, 76px);
        height: clamp(48px, ${48 / 768 * 100}vw, 76px);
    }

    .sub{
        display: grid;
        grid-gap: 8px;
        color: #6F6F71;

        ${props => props.template === 'longDoubled' ? `
        display: block;
        columns: 2;
        column-gap: 32px;
        p{
            break-inside: avoid;
        }
    ` : null}

        p{
        color: #6F6F71;

        }

        strong{
            color: #050505;
        }

        span{
            font-weight: 600;
        }
    }

    .text{
        padding: 10px;

        .title{
            font-weight: 600;
        }

        .body1{
            margin-bottom: 4px;
        }
    }
`