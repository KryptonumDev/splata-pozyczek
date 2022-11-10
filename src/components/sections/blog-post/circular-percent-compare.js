import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../../atoms/container"
import { textParser } from "../../../helpers/wysiwyg-modification"
import DonutChart from "react-svg-donut-chart"

export default function CircularPercentCompare({ data: { title, text, subText, source, charts } }) {

    return (
        <Wrapper name={textParser(title)}>
            <Container className="container">
                {title
                    ? <h2 className="h5 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                    : null}
                {text
                    ? <div className="body text" dangerouslySetInnerHTML={{ __html: text }} />
                    : null}
                <Grid count={charts.length}>
                    {charts.map(el => {
                        debugger
                        let percent = [{ value: el.percent, stroke: '#3B5BA9' }, { value: 100 - el.percent, stroke: '#DAE2FF' }]
                        return (
                            <div>
                                <Item percent={el.percent}>
                                    <DonutChart data={percent} />
                                </Item>
                                <span>{el.text}</span>
                            </div>
                        )
                    })}
                </Grid>
                {source
                    ? <span className="body1 source">Źródło: {source}</span>
                    : null}
                {subText
                    ? <div className="body1 sub" dangerouslySetInnerHTML={{ __html: subText }} />
                    : null}
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment circularPercentCompare on WpPost_Blogpost_Sections_CircularPercentCompare {
    circularPercentCompare {
        title
        text
        charts{
            percent
            text
        }
        source
        subText : textSub
      }
  }
`

const Item = styled.div`
    max-width: 130px;
    position: relative;
`

const Wrapper = styled.section`
scroll-margin-top: 50px;
    padding-top: var(--section-post);
    /* padding-top: calc(var(--section-post) * 2);
    margin-top: calc(var(--section-post) * -1); */


    .text{
        margin-top: 16px;
        column-gap: 32px;
        columns: 2;

        @media (max-width: 880px) {
            display: grid;
            grid-gap: 12px;
        }

        p{
            color: #6F6F71;
        }
    }

    .source{
        margin-top: 8px;
        text-align: center;
        color: #6F6F71;
        display: block;
        font-size: clamp(11px, ${11 / 768 * 100}vw, 16px);


        @media (max-width: 450px) {
            text-align: left;
        }
    }

    .sub{
        margin-top: 24px;
        p{
            color: #6F6F71;
        }
    }
`

const Grid = styled.div`
    display: grid;
    grid-gap: 32px;
    grid-template-columns: repeat(${props => props.count}, 1fr);
    margin-top: 32px;

    @media (max-width: 450px) {
        grid-gap: 8px;
        
    }
`