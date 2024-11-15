import React, { useMemo } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../../atoms/container"
import { htmlDelete, textParser } from "../../../helpers/wysiwyg-modification"
import { InView } from "react-intersection-observer"
import { slugTransform } from "../../../helpers/slug-transform"

export default function VerticalChart({ changeInView, data: { title, text, subText, source, chart } }) {

    const maxPercent = useMemo(() => {
        let max = 0
        chart.forEach(element => {
            if (element.number > max) {
                max = element.number
            }
        });
        return max
    }, [chart])

    return (
        <Wrapper id={slugTransform(title ? htmlDelete(title) : '')}>
            <Container className="container">
                {title
                    ? <InView onChange={(inView) => { changeInView(inView, textParser(title)) }}><h2 className="h5 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} /></InView>
                    : null}
                {text
                    ? <div className="body text" dangerouslySetInnerHTML={{ __html: text }} />
                    : null}
                <Grid count={chart.length}>
                    {chart.map(el => (
                        <Item key={el.text} fillPercent={el.number / maxPercent * 100}>
                            <div className="chart" />
                            <div className="flex">
                                <span className="body1 dark">
                                    {el.number}
                                </span>
                                <span className="body1 gray">
                                    {el.text}
                                </span>
                            </div>
                        </Item>
                    ))}
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
  fragment verticalChart on WpPost_Blogpost_Sections_VerticalChart {
    verticalChart {
        title
        text
        chart{
            number
            text
        }
        source
        subText : textSub
      }
  }
`

const Item = styled.div`
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: clamp(2px, ${2 / 768 * 100}vw, 8px);
    padding: 0 clamp(4px, ${6 / 768 * 100}vw, 10px);

    @media (max-width: 520px) {
        padding: 0;
        }

        @media (max-width: 374px){
            min-width: 80px;
        }

    .gray{
        color: #6E6E70;

        @media (max-width: 1024px) {
            font-size: 16px;
        }

        @media (max-width: 520px) {
            font-size: 11px;
        }
    }

    .dark{
        font-weight: 600;
        margin-bottom: 8px;

        @media (max-width: 1024px) {
            margin-bottom: 0;
        }

    @media (max-width: 520px) {
        font-size: 16px;
    }
    }

    .flex{
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .chart{
        margin: auto auto 0 auto;
        max-width: 68px;
        width: 80%;
        height: ${props => props.fillPercent}%;
        background-color: #5272C4;
    }

    ${props => props.fillPercent === 100 ? `
        .chart{
            background-color: #3B5BA9;
        }
    `: null}
`

const Wrapper = styled.section`
scroll-margin-top: 50px;
    padding-top: var(--section-post-spacing);
    /* padding-top: calc(var(--section-post-spacing) * 2);
    margin-top: calc(var(--section-post-spacing) * -1); */


    .text{
        margin-top: 16px;
        column-gap: 32px;
        columns: 2;

        @media (max-width: 880px) {
            columns: 1;

            * + *{
                margin-top: 16px;
            }
        }

        p{
            color: #6F6F71;
        }
    }

    .source{
        margin-top: 8px;
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
    grid-template-columns: repeat(${props => props.count}, 1fr);
    margin-top: 32px;

    @media (max-width: 374px) {
        padding-bottom: 10px;
        overflow: auto;
        max-width: calc(100vw - (clamp(16px,3.125vw,80px) * 2));
    }
`