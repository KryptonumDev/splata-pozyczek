import React, { useMemo } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../../atoms/container"
import { textParser } from "../../../helpers/wysiwyg-modification"
import { InView } from "react-intersection-observer"

export default function HorizontalChart({ changeInView, data: { title, text, subText, source, chart } }) {

    const maxPercent = useMemo(() => {
        let max = 0
        chart.forEach(element => {
            if (element.percent > max) {
                max = element.percent
            }
        });
        return max
    }, [chart])

    return (
        <Wrapper id={textParser(title)}>
            <Container className="container">
                {title
                    ? <InView onChange={(inView) => { changeInView(inView, textParser(title)) }}><h2 className="h5 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} /></InView>
                    : null}
                {text
                    ? <div className="body text" dangerouslySetInnerHTML={{ __html: text }} />
                    : null}
                <Grid>
                    {chart.map(el => (
                        <Item key={el.percent} fillPercent={el.percent / maxPercent * 100}>
                            <div className="flex">
                                <span className="body1 gray">
                                    {el.text}
                                </span>
                                <span className="body1 dark">
                                    {el.percent}%
                                </span>
                            </div>
                            <div className="chart" />
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
  fragment horizontalChart on WpPost_Blogpost_Sections_HorizontalChart {
    horizontalChart {
        title
        text
        chart{
            percent
            text
        }
        source
        subText : textSub
      }
  }
`

const Item = styled.div`
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-gap: 8px;
    padding: clamp(4px, ${6 / 768 * 100}vw, 10px);

    .gray{
        color: #6E6E70;
    }

    .dark{
        font-weight: 600;
    }

    .flex{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 24px;
        text-align: right;
    }

    .chart{
        height: 32px;
        width: ${props => props.fillPercent}%;
        background-color: #708EE0;
    }

    ${props => props.fillPercent === 100 ? `
        .chart{
            background-color: #3B5BA9;
        }
    `: null}

    @media (max-width: 1024px) {
        padding: clamp(4px, ${6 / 768 * 100}vw, 8px) 0;
        grid-template-columns: 220px 1fr;

        .flex{
            gap: 16px;
        }

        .gray{
            font-size: 14px;
        }
    }

    @media (max-width: 420px) {
        grid-template-columns: 200px 1fr;

        .flex{
            gap: 8px;
        }

        .gray{
            font-size: 13px;
        }
    }

    @media (max-width: 374px) {
        grid-template-columns: 1fr;
        grid-gap: 0;

        .flex{
            flex-direction: row-reverse;
        }
    }

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
    margin-top: 32px;
`