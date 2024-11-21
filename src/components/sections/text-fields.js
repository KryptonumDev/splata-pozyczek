import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from '../../helpers/wysiwyg-modification'


export default function TextFields({ data: { title, text } } ) {
    return (
        <Wrapper>
            <Container>
                <Fields>
                    {title && <h2 className="title h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />}
                    {text && <div className="text body1" dangerouslySetInnerHTML={{ __html: text }} />}
                </Fields>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment textFields on WpPage_PageBuilder_Sections_TextFields {
    textFields {
      title
      text
    }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section-spacing);
    .text{
        color: #6F6F71;
    }
`

const Fields = styled.section`
    display: grid;
    gap: 2rem;
    text-wrap: pretty;

        &>*>*{
            margin-bottom: 1rem;
        }
    
    .text{
        color: #6F6F71;
    }
`

