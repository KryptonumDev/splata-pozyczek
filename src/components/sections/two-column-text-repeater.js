import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { Grid } from "../atoms/two-column-content"
import { textParser } from "../../helpers/wysiwyg-modification"

export default function TwoColumnTextRepeater({ data: { repeater } }) {
    return (
        <Wrapper>
            <Container>
                <Grid className="grid">
                    {repeater.map((el, index) => (
                        <Item key={index} >
                            <div>
                                {el.titleLeft && <div className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(el.titleLeft) }} />}
                                {el.textLeft && <div className="body1" dangerouslySetInnerHTML={{ __html: el.textLeft }} />}
                            </div>
                            <div>
                                {el.titleRight && <div className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(el.titleRight) }} />}
                                {el.textRight && <div className="body1" dangerouslySetInnerHTML={{ __html: el.textRight }} />}
                            </div>
                        </Item>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment twoColumnTextRepeater on WpPage_PageBuilder_Sections_TwoColumnTextRepeater {
    twoColumnTextRepeater {
        repeater{
            titleLeft
            textLeft
            titleRight
            textRight
        }
      }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section-spacing);

    .grid{
        grid-template-columns: 1fr;
        grid-gap: 48px;

        @media (max-width: 640px){
            grid-gap: 32px;
        }
    }
`

const Item = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }

    .h6{
        margin-bottom: 16px;

        @media (max-width: 480px) {
            margin-bottom: 8px;
        }
    }
`