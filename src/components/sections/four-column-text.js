import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'

export default function RepeaterFourColumnText({ data }) {
    return (
        <Wrapper>
            <Container>
                {data.map(el => (
                    <Grid>
                        <p className="body3" dangerouslySetInnerHTML={{ __html: textParser(el.first) }} />
                        <p className="body3" dangerouslySetInnerHTML={{ __html: textParser(el.second) }} />
                        <p className="body3" dangerouslySetInnerHTML={{ __html: textParser(el.third) }} />
                        <p className="body3" dangerouslySetInnerHTML={{ __html: textParser(el.fourth) }} />
                    </Grid>
                ))}
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
fragment repeaterFourColumnText on WpPage_Blocks_pageBuilder {
    repeaterFourColumnText {
      first
      second
      third
      fourth
    }
}
`


const Wrapper = styled.section`
    margin-top: 80px;
`

const Grid = styled.div`
    margin-top: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 32px;

    &:first-child{
        margin-top: 0;
    }

    strong{
        color: #050505;
    }

    a{
        color: #3B5BA9;
    }
`