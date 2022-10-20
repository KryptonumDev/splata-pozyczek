import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'

export default function TwoColumnVideo({ data: { title, text, video } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <div>
                        <h2 className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                        <div className="body2" dangerouslySetInnerHTML={{ __html: text }} />
                    </div>
                    <iframe src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment twoColumnVideo on WpPage_PageBuilder_Sections_TwoColumnVideo {
    twoColumnVideo {
      title
      text
      video
    }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);

    iframe{
        height: fit-content;
        display: block;
        box-shadow: var(--shadow);
        border-radius: 4px;
        min-width: 400px;
        width: 100%;
        aspect-ratio: 1.77735849057/1;

        @media (max-width: 840px){
            min-width: unset;
        }
    }
`

const Content = styled.div`
    max-width: 1000px;
    margin: 0 auto;

    .body2{
        display: grid;
        margin-top: clamp(8px, ${12 / 768 * 100}vw, 16px);
        grid-gap: clamp(8px, ${12 / 768 * 100}vw, 16px);
    }

    display: grid;
    grid-template-columns: auto clamp(400px, ${400 / 768 * 100}vw, 580px);
    grid-gap: clamp(12px, ${24 / 768 * 100}vw, 32px);

    @media (max-width: 840px) {
        display: flex;
        flex-direction: column-reverse;

        .body2{
            columns: 2;
            column-gap: 12px;
            display: block;

            p{
                break-inside: avoid;
            }
        }
    }

    @media (max-width: 480px) {
        .body2{
            display: grid;
        }
    }
`