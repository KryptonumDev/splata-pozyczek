import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

export default function TwoColumn({ data }) {
    return (
        <Wrapper>
        </Wrapper>
    )
}

export const query = graphql`
  fragment blokTekstowy on WpPage {
    homepage{
        blokTekstowy{
            text
        }
    }
  }
`

const Wrapper = styled.section`
`