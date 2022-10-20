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
                        <h3 className="body2">{leftTitle}</h3>
                        <div className="body3" dangerouslySetInnerHTML={{ __html: left }} />
                    </div>
                    <div className="second">
                        <h3 className="body2">{centerTitle}</h3>
                        <div className="body3" dangerouslySetInnerHTML={{ __html: center }} />
                    </div>
                    <div>
                        <h3 className="body2">{rightTitle}</h3>
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
    margin-top: var(--section);
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;

    .body2{
        margin-bottom: 8px;
        font-weight: 600;
    }

    .body3{
        display: grid;
        grid-gap: 8px;
        p{
        color: #6F6F71;
        }
    }

    @media (max-width: 768px) {
        display: block;
        columns: 2;
        div{
            break-inside: avoid;
        }

        .second{
            margin-bottom: 16px;
        }
    }

    @media (max-width: 640px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 8px;

        .second{
            margin-bottom: 0;
        }
    }
`