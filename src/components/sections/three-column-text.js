import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'

export default function ThreeColumnText({ data: { left, right, center } }) {
    return (
        <Wrapper>
            <Container>
                <Grid>
                    <div className="body2" dangerouslySetInnerHTML={{ __html: textParser(left) }} />
                    <div className="body3" dangerouslySetInnerHTML={{ __html: textParser(center) }} />
                    <div className="body3" dangerouslySetInnerHTML={{ __html: textParser(right) }} />
                </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
fragment threeColumnText on WpPage_PageBuilder_Sections_ThreeColumnText {
    threeColumnText {
        left
        right
        center
    }
}
`


const Wrapper = styled.section`
    margin-top: var(--section-spacing);
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;
    
    p{
        color: #6F6F71;
    }

    @media (max-width: 768px) {
        display: block;
        columns: 2;
        p{
            break-inside: avoid;

            &:nth-child(2){
                margin-top: 8px;
            }
        }
    }

    @media (max-width: 640px) {
        display: grid;
    grid-template-columns: 1fr;
        grid-gap: 8px;
    }
`