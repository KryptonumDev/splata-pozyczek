import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'

export default function LongPanelWithTwoColumn({ data: {title, text, icon} }) {
    return (
        <Wrapper>
            <Container>
                <LongPanel className="desctop">
                    <img src={icon.localFile.publicURL} alt={icon.altText} />
                    <div className="wrap">
                        <span className="body1" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                        <div className="body2 text" dangerouslySetInnerHTML={{ __html: text }} />
                    </div>
                </LongPanel>
                <LongPanel className="mobile">
                    <div className="wrap">
                        <img src={icon.localFile.publicURL} alt={icon.altText} />
                        <span className="body1" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                    </div>
                    <div className="body2 text" dangerouslySetInnerHTML={{ __html: text }} />
                </LongPanel>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment longPanelWithTwoColumn on WpPage_Blocks_pageBuilder {
    longPanelWithTwoColumn {
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
`

const Wrapper = styled.section`
    margin-top: var(--section);
`

const LongPanel = styled.div`
    margin-top: 24px;
    padding: 10px;
    box-shadow: var(--shadow);
    display: grid;
    border-radius: 4px;
    grid-template-columns: auto auto;
    
    img{

    }

    .body1{
        font-weight: 600;
        margin-bottom: 4px;
    }

    .text{
        columns: 2;
        column-gap: 24px;

        p{
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