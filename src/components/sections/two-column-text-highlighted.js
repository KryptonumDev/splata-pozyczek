import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from "../../helpers/wysiwyg-modification"

export default function TwoColumnTextHighlighted({ data: { title, text } }) {
    return (
        <Wrapper>
            <Container className="container">
                <Box>
                    <h2 className="arsenal h4" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                    <p className="body1" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                </Box>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment twoColumnTextHighlighted on WpPage_PageBuilder_Sections_TwoColumnTextHighlighted {
    twoColumnTextHighlighted {
        title
        text
      }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section-spacing);

    .body1{
        color: #6F6F71;
    }

    @media (max-width: 768px) {
        .container{
            padding: 0;
        }
    }
`

const Box = styled.div`
    max-width: var(--inner-container-width);
    margin: 0 auto;
    display: grid;
    grid-gap: 32px;
    grid-template-columns: 1fr 1fr;
    padding: clamp(16px, ${24 / 768 * 100}vw, 32px);

    box-shadow: var(--shadow);
    background-color: var(--color-light);
    border-radius: 4px;

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        grid-gap: 16px;
    }

`