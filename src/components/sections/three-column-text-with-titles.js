import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"

export default function ThreeColumnTextWithTitles({ data: { left, leftTitle, right, rightTitle, center, centerTitle } }) {
    return (
        <Wrapper>
            <Container>
                <Grid>
                    <div>
                        <h2 className="body2">{leftTitle}</h2>
                        <div className="body3" dangerouslySetInnerHTML={{ __html: left }} />
                    </div>
                    <div className="second">
                        <h2 className="body2">{centerTitle}</h2>
                        <div className="body3" dangerouslySetInnerHTML={{ __html: center }} />
                    </div>
                    <div>
                        <h2 className="body2">{rightTitle}</h2>
                        <div className="body3" dangerouslySetInnerHTML={{ __html: right }} />
                    </div>
                </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
fragment threeColumnTextWithTitles on WpPage_PageBuilder_Sections_ThreeColumnTextWithTitles {
    threeColumnTextWithTitles {
        center
        centerTitle
        left
        leftTitle
        right
        rightTitle
    }
}
`


const Wrapper = styled.section`
    margin-top: var(--section-spacing);
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;

    .body2{
        margin-bottom: 8px;
        font-weight: 600;
        font-size: 20px;
    }

    .body3{
        display: grid;
        grid-gap: 8px;
        p{
        color: #6F6F71;
        font-size:16px;
        }
    }


    @media (min-width: 1025px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
`
