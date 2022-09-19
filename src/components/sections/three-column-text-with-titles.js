import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'

export default function ThreeColumnTextWithTitles({ data: { left, leftTitle, right, rightTitle, center, centerTitle } }) {
    return (
        <Wrapper>
            <Container>
                <Grid>
                    <div>
                        <h3 className="body2">{leftTitle}</h3>
                        <p className="body3" dangerouslySetInnerHTML={{ __html: textParser(left) }} />
                    </div>
                    <div className="second">
                        <h3 className="body2">{centerTitle}</h3>
                        <p className="body3" dangerouslySetInnerHTML={{ __html: textParser(center) }} />
                    </div>
                    <div>
                        <h3 className="body2">{rightTitle}</h3>
                        <p className="body3" dangerouslySetInnerHTML={{ __html: textParser(right) }} />
                    </div>
                </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
fragment threeColumnTextWithTitles on WpPage_Blocks_pageBuilder {
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