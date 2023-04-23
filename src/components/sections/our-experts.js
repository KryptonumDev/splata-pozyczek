import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'
import ExpertCard from "../atoms/expert-card"

export default function OurExperts({ data: { tytulSekcji, experts } }) {
  return (
    <Wrapper>
      <Container>
        <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(tytulSekcji) }} />
        <Grid>
          {experts.map((el, index) => {
            if (el.expert) {
              return <ExpertCard key={index} el={el.expert} />
            }
            return null
          })}
        </Grid>
      </Container>
    </Wrapper>
  )
}

export const query = graphql`
fragment ourExperts on WpPage_PageBuilder_Sections_OurExperts {
    ourExperts {
      tytulSekcji
      experts {
        expert {
          ... on WpEkspert {
            id
            slug
            title
            ekspert {
              workWithProducts
              role
              numerTelefonu
              emailAdres
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);

    .h4{
        font-family: 'Arsenal', sans-serif;
        text-align: center;
        margin-bottom: clamp(16px, ${24 / 768 * 100}vw, 32px);
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: 1180px) {
        grid-template-columns: 1fr 1fr;
        width: fit-content;
        margin: 0 auto;
    }

    @media (max-width: 536px) {
        grid-template-columns: 1fr;
        grid-gap: 16px;
    }
`