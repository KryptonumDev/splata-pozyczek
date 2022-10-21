import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"

export default function Map({ data: { url } }) {
    return (
        <Wrapper>
            <Container>
                <iframe
                    src={url}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                />
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment map on WpPage_PageBuilder_Sections_Map {
    map {
        url
      }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);

    iframe{
        width: 100%;
        aspect-ratio: 2/1;
        border: none;
        border-radius: 8px;
        box-shadow: var(--shadow);
    }
`