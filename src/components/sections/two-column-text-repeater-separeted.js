import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from "../../helpers/wysiwyg-modification"
import { Grid } from "../atoms/two-column-content"

export default function TwoColumnTextRepeaterSepareted({ data: { repeater } }) {
    return (
        <Wrapper>
            <Container>
                {repeater.map((el, index) => (
                    <Box key={index} >
                        <h3 className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(el.title) }} />
                        <Grid>
                            <div className="body1" dangerouslySetInnerHTML={{ __html: el.left }}></div>
                            <div className="body1" dangerouslySetInnerHTML={{ __html: el.right }}></div>
                        </Grid>
                    </Box>
                ))}
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment twoColumnTextRepeaterSepareted on WpPage_PageBuilder_Sections_TwoColumnTextRepeaterSepareted {
    twoColumnTextRepeaterSepareted {
        repeater{
            title
            left
            right
        }
      }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);
`

const Box = styled.div`
    margin-top: 48px;

    @media (max-width: 640px) {
        margin-top: 24px;
    }

    &:first-child{
        margin-top: 0;
    }
    .h6{
        margin-bottom: 16px;
        @media (max-width: 640px) {
            margin-bottom: 16px;
        }
    }
`