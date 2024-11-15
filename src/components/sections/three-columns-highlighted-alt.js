import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'
import Light from './../../images/check-light.svg'

export default function ThreeColumnsHighlightedAlt({ data: { title, points } }) {
    return (
        <Wrapper>
            <Container className="container">
                <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                <Content>
                    <Grid>
                        {points.map((el, index) => (
                            <Item key={index} className="body1" light={Light} dangerouslySetInnerHTML={{ __html: el.text }} />
                        ))}
                    </Grid>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment threeColumnsHighlightedAlt on WpPage_PageBuilder_Sections_ThreeColumnsHighlightedAlt {
    threeColumnsHighlightedAlt {
      title
      points {
        text
      }
    }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section-spacing);


    .h4{
        max-width: 700px;
        text-align: center;
        margin: 0 auto;
    }

    .link{
        margin: 32px auto 0 auto;
    }

    @media (max-width: 480px){
        .link{
            width: 100%;
            padding: 12px;
            text-align: center;
        }
    }
`

const Content = styled.div`
    margin-top: clamp(24px, ${32 / 768 * 100}vw, 32px);
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: clamp(16px, ${32 / 768 * 100}vw, 32px);

    @media (max-width: 820px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`

const Item = styled.div`
    padding: 16px 16px 16px 60px;
    position: relative;
    min-height: 32px;
    box-shadow: var(--shadow);
    border-radius: 4px;
    background-color: var(--color-light);
    font-weight: 600;
        min-height: 32px;
        box-sizing: content-box;

    &::before{
        content: url(${props => props.light});
        position: absolute;
        left: 16px;
        top: 16px;
    }

    @media (max-width: 550px) {
        padding: 12px 12px 12px 48px;

        &::before{
            left: 8px;
            top: 12px;
        }
    }

`