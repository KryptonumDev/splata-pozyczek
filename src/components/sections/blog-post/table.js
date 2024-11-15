import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../../atoms/container"
import { htmlDelete, textParser } from "../../../helpers/wysiwyg-modification"
import { InView } from "react-intersection-observer"
import { slugTransform } from "../../../helpers/slug-transform"

export default function Table({ changeInView, data: { title, textFirst, textSecond, textThird, table, source } }) {
    return (
        <Wrapper id={slugTransform(title ? htmlDelete(title) : '')}>
            <Container className="container">
                {title
                    ? <InView onChange={(inView) => { changeInView(inView, textParser(title)) }}><h2 className="h5 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} /></InView>
                    : null}
                {textFirst
                    ? <div className="body1 text" dangerouslySetInnerHTML={{ __html: textFirst }} />
                    : null}
                {textSecond
                    ? <div className="body1 text" dangerouslySetInnerHTML={{ __html: textSecond }} />
                    : null}
                <Grid>
                    {table?.rows?.map((el, index) => (
                        <Row key={index} count={table.columnCount}>
                            <Cell>
                                {el.cellFirst}
                            </Cell>
                            {table.columnCount >= 2
                                ? (
                                    <Cell>
                                        {el.cellSecond}
                                    </Cell>
                                )
                                : null}
                            {table.columnCount >= 3
                                ? (
                                    <Cell>
                                        {el.cellThird}
                                    </Cell>
                                )
                                : null}
                            {table.columnCount >= 4
                                ? (
                                    <Cell>
                                        {el.cellFourth}
                                    </Cell>
                                )
                                : null}
                            {table.columnCount >= 5
                                ? (
                                    <Cell>
                                        {el.cellFifth}
                                    </Cell>
                                )
                                : null}
                            {table.columnCount >= 6
                                ? (
                                    <Cell>
                                        {el.cellSix}
                                    </Cell>
                                )
                                : null}
                        </Row>
                    ))}
                </Grid>
                {source
                    ? <span className="body1 source">Źródło: {source}</span>
                    : null}
                {textThird
                    ? <div className="body1 sub" dangerouslySetInnerHTML={{ __html: textThird }} />
                    : null}
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment table on WpPost_Blogpost_Sections_Table {
    table {
        title
        textFirst
        textSecond
        textThird
        source
        table{
            columnCount
            rows : columns{
                cellFirst
                cellSecond
                cellThird
                cellFourth
                cellFifth
                cellSix
            }

        }
      }
  }
`

const Grid = styled.table`
    width: 100%;
    border-spacing: clamp(2px, ${2 / 480 * 100}vw, 4px) 4px ;
    margin-top: 32px;
    
    @media (max-width: 480px) {
        table-layout: fixed;
    }

`

const Cell = styled.td`
    text-align: right;
    padding: clamp(4px, ${4 / 768 * 100}vw, 10px) clamp(8px, ${8 / 768 * 100}vw, 10px);
    color: #6F6F71;
    font-weight: 400;
    font-size: clamp(11px, ${11 / 768 * 100}vw, 16px);
    line-height: 131%;
    text-align: right;
    font-feature-settings: 'pnum' on, 'lnum' on;

    @media (max-width: 768px) {
        font-size: clamp(11px, ${11 / 480 * 100}vw, 16px);
    }

    
    @media (max-width: 375px) {
        font-size: 10px;
        padding: 4px;
    }

`

const Row = styled.tr`
    /* display: grid;
    grid-template-columns: repeat(${props => props.count}, auto); */

    &:first-child{
        ${Cell}{
            background-color: #DAE2FF;
            text-align: center;
            color: #050505;
            font-weight: 600;
            padding: 10px 2px;
            word-break: break-word;
            overflow-wrap: break-word;
            word-wrap: break-word;
            hyphens: auto;
        }
    }
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

    .sub{
        margin-top: 32px;
        columns: 1;

        * + *{
            margin-top: 16px;
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
    }
`