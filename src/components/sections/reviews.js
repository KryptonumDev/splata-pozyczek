import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from "../../helpers/wysiwyg-modification"

export default function Reviews({ data: { title, text } }) {
    return (
        <Wrapper>
            <Container>
                <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                <p className="body1" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment reviews on WpPage_PageBuilder_Sections_Reviews {
    reviews {
        title
        text
      }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);
    text-align: center;

    .body1{
        width: 1000px;
        background-color: var(--color-light);
        box-shadow: var(--shadow);
        padding: 10px 24px;
        margin:  16px auto 0 auto;
    }
`