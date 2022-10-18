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
                        <div>
                            <p className="body3 title">{el.firstTitle}</p>
                            <p className="body3" dangerouslySetInnerHTML={{ __html: textParser(el.first) }} />
                        </div>
                        <div>
                            <p className="body3 title">{el.secondTitle}</p>
                            <p className="body3" dangerouslySetInnerHTML={{ __html: textParser(el.second) }} />
                        </div>
                        <div>
                            <p className="body3 title">{el.thirdTitle}</p>
                            <p className="body3" dangerouslySetInnerHTML={{ __html: textParser(el.third) }} />
                        </div>
                        <div>
                            <p className="body3 title">{el.fourthTitle}</p>
                            <p className="body3" dangerouslySetInnerHTML={{ __html: textParser(el.fourth) }} />
                        </div>
                    </Grid>
                ))}
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
fragment repeaterFourColumnText on WpPage_Blocks_pageBuilder {
    repeaterFourColumnText {
      firstTitle
      first
      secondTitle
      second
      thirdTitle
      third
      fourthTitle
      fourth
    }
}
`


const Wrapper = styled.section`
    margin-top: var(--section);
`

const Grid = styled.div`
    margin-top: clamp(12px, ${16 / 768 * 100}vw, 32px);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: clamp(12px, ${16 / 768 * 100}vw, 32px) 32px;
    
    p{
        color: #6F6F71;
    }

    @media (max-width: 876px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 568px) {
        grid-template-columns: 1fr;
    }

    &:first-child{
        margin-top: 0;
    }

    strong{
        color: #050505;
    }

    .title{
        margin-bottom: clamp(2px, ${4 / 768 * 100}vw, 6px);
        font-weight: 700;
        color: #050505;
    }

    a{
        color: #3B5BA9;
    }

    br{
        line-height: 6px;
    }
`