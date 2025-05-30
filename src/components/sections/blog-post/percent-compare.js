import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../../atoms/container"
import { htmlDelete, textParser } from "../../../helpers/wysiwyg-modification"
import { InView } from "react-intersection-observer"
import { slugTransform } from "../../../helpers/slug-transform"

export default function PercentCompare({ changeInView, data: { title, text, subText, source, tiles } }) {

    return (
        <Wrapper id={slugTransform(title ? htmlDelete(title) : '')}>
            <Container className="container">
                {title
                    ? <InView onChange={(inView) => { changeInView(inView, textParser(title)) }}><h2 className="h5 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} /></InView>
                    : null}
                {text
                    ? <div className="body text" dangerouslySetInnerHTML={{ __html: text }} />
                    : null}
                <Grid count={tiles.length}>
                    {tiles.map(el => (
                        <Item key={el.percent}>
                            <span className="h4 arsenal number">{el.percent}%</span>
                            <p className="body1">{el.text}</p>
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
  fragment percentCompare on WpPost_Blogpost_Sections_PercentCompare {
    percentCompare {
        title
        text
        tiles{
            percent
            text
        }
        source
        subText : textSub
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

const Item = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    .number{
        padding: 0 clamp(16px, ${16 / 768 * 100}vw, 40px);
        border-radius: 4px;
        background-color: var(--color-light);
        margin-bottom: 12px;
    }

    &::after{
        content: '';
        position: absolute;
        right: -16px;
        width: 2px;
        background: #D9D9D9;
        top: 0;
        bottom: 12px;
    }

    &:last-child{
        &::after{
            display: none;
        }

        .number{
            background-color: var(--color-medium);
            color: #f2f2f2;
        }
    } 
    @media (max-width: 450px) {
        &::after{
            display: none;
        }
    }
`