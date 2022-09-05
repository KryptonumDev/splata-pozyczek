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
                    <p className="body2" dangerouslySetInnerHTML={{ __html: textParser(left) }} />
                    <p className="body3" dangerouslySetInnerHTML={{ __html: textParser(center) }} />
                    <p className="body3" dangerouslySetInnerHTML={{ __html: textParser(right) }} />
                </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
fragment threeColumnText on WpPage_Blocks_pageBuilder {
    threeColumnText {
        left
        right
        center
    }
}
`


const Wrapper = styled.section`
    margin-top: 80px;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;
`