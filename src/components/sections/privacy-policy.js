import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { Grid } from "../atoms/two-column-content"
import { textParser } from "../../helpers/wysiwyg-modification"

export default function PrivacyPolicy({ data: { repeater } }) {
    return (
        <Wrapper>
            <Container>
                <Grid className="grid">
                    {repeater.map(el => (
                        <div className="item">
                            <h3 className="h6" dangerouslySetInnerHTML={{ __html: textParser(el.title) }} />
                            <div className="body1" dangerouslySetInnerHTML={{ __html: el.text }} />
                        </div>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment privacyPolicy on WpPage_PageBuilder_Sections_PrivacyPolicy {
    privacyPolicy {
        repeater{
            title
            text
        }
      }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);

    .h6{
        margin-bottom: 16px;
    }

    .grid{
        display: block;
        columns: 2;
        column-gap: 32px;

        @media (max-width: 640px) {
            columns: 1;
        }
    }

    .item{
        break-inside: avoid;
        margin-top: 32px;

        &:first-child{
            margin-top: 0;
        }
    }
`