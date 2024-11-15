import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from "../../helpers/wysiwyg-modification"

export default function ThreeColumnTextMiddleHighlighted({ data: { title, first, second, third } }) {

    return (
        <Wrapper>
            <Container>
                <h2 className="h5 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                <Grid>
                    <div className="body2" dangerouslySetInnerHTML={{ __html: first }} />
                    <div className="body1" dangerouslySetInnerHTML={{ __html: second }} />
                    <div className="body2" dangerouslySetInnerHTML={{ __html: third }} />
                </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment threeColumnTextMiddleHighlighted on WpPage_PageBuilder_Sections_ThreeColumnTextMiddleHighlighted {
    threeColumnTextMiddleHighlighted {
        title
        first
        second
        third
      }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section-spacing);

    .h5{
        text-align: center;
        max-width: 800px;
        margin: 0 auto clamp(16px, ${32 / 768 * 100}vw, 32px) auto;

        @media (max-width: 480px) {
            text-align: left;
        }
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px 32px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;

        .body1{
            grid-row-start: 2;
            grid-row-end: 3;
        }
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;

        .body1{
            grid-row-start: unset;
            grid-row-end: unset;
        }
    }

    .body1{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 28px 14px;
        box-shadow: var(--shadow);
        border-radius: 4px;
        background-color: var(--color-light);
    }
` 