import React, { useMemo } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../../atoms/container"
import { textParser } from "../../../helpers/wysiwyg-modification"
import DonutChart from "react-svg-donut-chart"

export default function CircularChart({ data: { title, text, subText, source, chart } }) {

    const dataPie = useMemo(() => {
        let arr = []

        chart.forEach(el => {
            arr.push({ value: el.percent, stroke: el.color })
        })

        return arr
    }, [chart])

    return (
        <Wrapper name={textParser(title)}>
            <Container className="container">
                {title
                    ? <h2 className="h5 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                    : null}
                {text
                    ? <div className="body text" dangerouslySetInnerHTML={{ __html: text }} />
                    : null}
                <ChartBox>
                    <DonutChart data={dataPie} />
                    <Grid>
                        {chart.map(el => (
                            <Item color={el.color}>
                                <div className="color" />
                                <div>
                                    <span className="body1">{el.percent}%</span>
                                    <div className="body2" dangerouslySetInnerHTML={{ __html: el.text }} />
                                </div>
                            </Item>
                        ))}
                    </Grid>
                </ChartBox>
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
  fragment circularChart on WpPost_Blogpost_Sections_CircularChart {
    circularChart {
        title
        text
        chart{
            percent
            color
            text
        }
        source
        subText
      }
  }
`

const ChartBox = styled.div`
    display: grid;
    grid-gap: 12px;
    align-items: center;
    grid-template-columns: clamp(250px, ${250 / 768 * 100}vw, 375px) auto;

    @media (max-width: 764px) {
        grid-template-columns: clamp(250px, ${250 / 480 * 100}vw, 375px) auto;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`

const Wrapper = styled.section`
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
        text-align: right;
        color: #6F6F71;
        display: block;
        font-size: clamp(11px, ${11 / 768 * 100}vw, 16px);

        @media (max-width: 480px){
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

    @media (max-width: 480px) {
        grid-template-columns: 1fr 1fr;
        width: fit-content;
        margin: 0 auto;
    }
`

const Item = styled.div`
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 62px auto;

    .color{
        width: 62px;
        height: 38px;
        background-color: ${props => props.color};
        border-radius: 4px;
    }

    .body1{
        font-weight: 600;
    }

    .body2{
        p{
            color: #6F6F71;
        }
    }

    @media (max-width: 480px){
        width: fit-content;
        grid-template-columns: 40px auto;
        .color{
            width: 40px;
            height: 40px;
        }
    }
`