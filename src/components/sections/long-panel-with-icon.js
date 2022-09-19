import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'

export default function LongPanelWithIcon({ data: { title, text, icon } }) {
    return (
        <Wrapper>
            <Container>
                <Content className="desctop">
                    <img src={icon.localFile.publicURL} alt={icon.localFile.altText} />
                    <div className="text">
                        <h2 className="body1 title" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                        <p className="body1 sub" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                    </div>
                </Content>
                <Content className="mobile">
                    <div className="text">
                        <img src={icon.localFile.publicURL} alt={icon.localFile.altText} />
                        <h2 className="body1 title" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                    </div>
                    <p className="body1 sub" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment longPanelWithIcon on WpPage_Blocks_pageBuilder {
    longPanelWithIcon {
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

    .text{
        padding: 10px;

        .title{
            font-weight: 600;
        }

        .sub{
            color: #75757A;

            strong{
                color: #050505;
            }

            span{
                font-weight: 600;
            }
        }
        

        .body1{
            margin-bottom: 4px;
        }
    }
`