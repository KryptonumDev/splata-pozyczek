import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"

export default function StepsToComplaints({ data: { steps } }) {
    return (
        <Wrapper>
            <Container>
                <Grid>
                    {steps.map((el, index) => (
                        <Item>
                            <span className="h4 arsenal">{index + 1}</span>
                            <div className="body1" dangerouslySetInnerHTML={{ __html: el.text }} />
                        </Item>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment stepsToComplaints on WpPage_PageBuilder_Sections_StepsToComplaints {
    stepsToComplaints {
      steps {
        text
      }
    }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: clamp(24px, ${32 / 768 * 100}vw, 32px);

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const Item = styled.div`
    display: grid;
    grid-template-columns: clamp(40px, ${40 / 768 * 100}vw, 76px) auto;
    border-radius: 4px;
    background-color: var(--color-light);
    box-shadow: var(--shadow);
    padding: 24px clamp(16px, ${16 / 768 * 100}vw, 32px);
    grid-gap: 12px;

    span.h4{
        display: flex;
        justify-content: center;
        align-items: center;
        width: clamp(40px, ${40 / 768 * 100}vw, 76px);
        height: clamp(40px, ${40 / 768 * 100}vw, 76px);
        border-radius: 50%;
        box-shadow: var(--shadow);
        color: var(--color-medium);
        font-size: clamp(27px, ${27 / 768 * 100}vw, 38px);
    }

    div.body1{
        display: grid;
        grid-gap: 8px;
    }

    ul,ol{
        margin-left: clamp(12px, ${12/768*100}vw, 24px);
        display: grid;
        grid-gap: 8px;

        ul,ol{
            grid-gap: 4px;
        }
    }

    &:first-child{
        background-color: var(--color-medium);

        *{
            color: #FEF5F5;
        }

        span.h4{
            background-color: var(--color-dark);
            color: #8AA9FC;
        }
    }
`