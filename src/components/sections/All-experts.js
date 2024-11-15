import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import ExpertCard from "../atoms/expert-card"

export default function AllExperts({ experts }) {
    return (
        <Wrapper>
            <Container>
                <Grid>
                    {experts?.map((el, index) => (
                        <ExpertCard key={index} el={el} />
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--section-spacing);
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: clamp(16px, ${32 / 768 * 100}vw, 32px);

    @media (max-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
        width: fit-content;
        margin: 0 auto;
    }

    @media (max-width: 880px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 540px) {
        grid-template-columns: 1fr;
    }
`