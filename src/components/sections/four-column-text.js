import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'

export default function FourColumnText({ data: { first, second, third, fourth } }) {
    return (
        <Wrapper>
            <Container>
                <Grid>
                    <p className="body1" dangerouslySetInnerHTML={{ __html: textParser(first) }} />
                    <p className="body3" dangerouslySetInnerHTML={{ __html: textParser(second) }} />
                    <p className="body3" dangerouslySetInnerHTML={{ __html: textParser(third) }} />
                    <p className="body3" dangerouslySetInnerHTML={{ __html: textParser(fourth) }} />
                </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
fragment fourColumnText on WpPage_PageBuilder_Sections_FourColumnText {
    fourColumnText {
        first
        second
        third
        fourth
    }
}
`


const Wrapper = styled.section`
    margin-top: var(--section);
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
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