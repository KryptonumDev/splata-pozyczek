import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../../atoms/container"
import { textParser } from "../../../helpers/wysiwyg-modification"

export default function TextSection({ data: { title, text } }) {
    return (
        <Wrapper name={textParser(title)}>
            <Container className="container">
                {title
                    ? <h2 className="h5 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                    : null}
                {text
                    ? <div className="body1" dangerouslySetInnerHTML={{ __html: text }} />
                    : null}
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment textSection on WpPost_Blogpost_Sections_TextSection {
    textSection {
        title
        text
      }
  }
`

const Wrapper = styled.section`
    padding-top: var(--section-post);
    /* padding-top: calc(var(--section-post) * 2);
    margin-top: calc(var(--section-post) * -1); */
    .body1{
        margin-top: 16px;
        display: grid;
        grid-gap: 16px;

        p{
            color: #6F6F71;
        }
    }
`