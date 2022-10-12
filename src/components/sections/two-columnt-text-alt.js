import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'

export default function TwoColumnTextWithBoldText({ data: { right, leftTitle, leftText } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <div className="flex first">
                        <h2 className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(leftTitle) }} />
                        <h3 className="body1 arsenal" dangerouslySetInnerHTML={{ __html: textParser(leftText) }} />
                    </div>
                    <div className="flex second">
                        <p className="body1" dangerouslySetInnerHTML={{ __html: textParser(right) }} />
                    </div>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment twoColumnTextWithBoldText on WpPage_Blocks_pageBuilder {
    twoColumnTextWithBoldText {
        right
        leftTitle
        leftText
    }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);
`

const Content = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 32px;

    strong{
        color: #000;
    }

    .h4{
        margin-bottom: 24px;
        font-size: clamp(27px, 3.896875vw, 38px);
    }

    .h6{
        color: #050505;
    }

    .first .body1{
        margin-top: clamp(8px, ${8 / 768 * 100}vw, 16px);
        color: #6F6F71;
    }

    .second .body1{
        font-weight: 600;
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        grid-gap: 8px;

        .h4{
            font-size: clamp(27px, 4.296875vw, 38px);
        }

        .flex{
            display: block;

            .body2{
                margin-bottom: 0;
            }
        }
    }

    @media (max-width: 596px) {
        grid-gap: 12px;
        .flex{
            display: block;

            &.second{
                display: grid;
                grid-gap: 8px;
                grid-template-columns: 1fr;
            }
        }
        .h4{
            margin-bottom: 12px;
        }
        .body2{
            margin-bottom: 8px;
        }
    }
`