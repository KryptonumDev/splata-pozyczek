import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from "../../helpers/wysiwyg-modification"

export default function FourBigTextTiles({ data: { title, text, highlighted, tiles } }) {
    return (
        <Wrapper>
            <Container>
                <h2 className="h4" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                {text
                    ? <div className="h6 subtext" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                    : null}
                <Grid>
                    {tiles.map((el, index) => {
                        if (!index) {
                            return <Item key={el.text}>
                                <h3 className="body1" dangerouslySetInnerHTML={{ __html: textParser(el.title) }} />
                                {el.text
                                    ? <div className="body2" dangerouslySetInnerHTML={{ __html: textParser(el.text) }} />
                                    : null}
                            </Item>
                        }
                        return null
                    })}
                    <Highlighted className="h6" dangerouslySetInnerHTML={{ __html: textParser(highlighted) }} />
                    {tiles.map((el, index) => {
                        if (index) {
                            return <Item key={el.text}>
                                <h3 className="body1" dangerouslySetInnerHTML={{ __html: textParser(el.title) }} />
                                {el.text
                                    ? <div className="body2" dangerouslySetInnerHTML={{ __html: textParser(el.text) }} />
                                    : null}
                            </Item>
                        }
                        return null
                    })}
                </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment fourBigTextTiles on WpPage_PageBuilder_Sections_FourBigTextTiles {
    fourBigTextTiles {
      title
      text
      highlighted
      tiles {
        title
        text
      }
    }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section-spacing);

    .subtext{
        max-width: 840px;
        text-align: center;
        margin: 0 auto;
        margin-top: 16px;
        color: #6E6E70;
    }

    .h4{
        text-align: center;
        font-size: clamp(28px, 4.296875vw, 38px);
    }
`

const Grid = styled.div`
    margin-top: clamp(24px, ${28 / 768 * 100}vw, 32px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: 768px) {
        grid-gap: 16px 24px;
    }

    @media (max-width: 600px){
        grid-template-columns:  1fr;
    }
`

const Highlighted = styled.div`
    padding: 20px 52px 20px 20px;
    display: flex;
    align-items: center;
    background: var(--color-medium);
    box-shadow: var(--shadow);
    border-radius: 4px;
    color: #F2F4FF;
    font-family: 'Arsenal', sans-serif;

    @media (max-width: 1024px) {
        padding: 20px 30px;
    }

    @media (max-width: 768px) {
        padding: 20px;
    }
`

const Item = styled.div`
    padding: 20px;
    background: var(--color-white);
    box-shadow: var(--shadow);
    border-radius: 4px;

    .body1{
        font-weight: 600;
        margin-bottom: 4px;
        margin-right: 32px;

        @media (max-width: 1024px){
            margin-right: 0;
        }
    }

    .body2{
        color: #6F6F71;
        margin-right: 32px;

        @media (max-width: 1024px){
            margin-right: 0;
        }

        @media (max-width: 768px){
            font-size: 12px;
        }

        @media (max-width: 600px){
            font-size: 16px;
        }
    }

    a{
        color: #3B5BA9;
    }
`