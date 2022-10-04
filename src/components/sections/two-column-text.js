import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'

export default function TwoColumnText({ data: { rightBottom, rightTop, leftTitle, leftText } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <div className="flex first">
                        <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(leftTitle) }} />
                        <h3 className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(leftText) }} />
                    </div>
                    <div className="flex second">
                        <p className="body2" dangerouslySetInnerHTML={{ __html: textParser(rightTop) }} />
                        <p className="body3" dangerouslySetInnerHTML={{ __html: textParser(rightBottom) }} />
                    </div>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment twoColumnText on WpPage_Blocks_pageBuilder {
    twoColumnText {
        rightTop
        rightBottom
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
        color: #75757A;
    }

    .body2{
        margin-bottom: 16px;
        color: #75757A;
    }

    .body3{
        color: #75757A;
    }

    @media (max-width: 796px) {
        grid-template-columns: 1fr;
        grid-gap: 24px;

        .h4{
            font-size: clamp(27px, 4.296875vw, 38px);
        }

        .flex{
            display: grid;

            .body2{
                margin-bottom: 0;
            }

            &.first{
                grid-template-columns: 44fr 25fr;
                grid-gap: 32px;
            }

            &.second{
                grid-template-columns: 1fr 1fr;
                grid-gap: 16px;
            }
        }
    }

    @media (max-width: 596px) {
        grid-gap: 12px;
        .flex{
            display: block;
        }
        .h4{
            margin-bottom: 12px;
        }
        .body2{
            margin-bottom: 8px;
        }
    }
`