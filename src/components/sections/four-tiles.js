import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'

export default function FourTiles({ data: { title, text, tiles } }) {
    return (
        <Wrapper>
            <Container>
                <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                <div className="text body1" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                <Grid>
                    {tiles.map((el, index) => (
                        <Item key={index}>
                            <img src={el.icon.localFile.publicURL} alt={el.icon.altText} />
                            <div className="body1" dangerouslySetInnerHTML={{ __html: el.text }} />
                        </Item>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment fourTiles on WpPage_PageBuilder_Sections_FourTiles {
    fourTiles {
      title
      text
      tiles {
        text
        icon {
          altText
          localFile {
            publicURL
          }
        }
      }
    }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);

    .h4{
        text-align: center;
        max-width: 1000px;
        margin: 0 auto;
        font-size: clamp(28px, 4.296875vw, 38px);
    }

    .text{
        color: #6F6F71;
        margin: clamp(16px, ${16 / 768 * 100}vw, 24px) auto clamp(24px, ${24 / 768 * 100}vw, 32px) auto;
        max-width: 540px;
        text-align: center;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: clamp(24px, ${24/768*100}vw, 32px);
    max-width: 794px;
    margin: 0 auto;

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`

const Item = styled.div`
    background-color: var(--color-light);
    border-radius: 4px;
    box-shadow: var(--shadow);

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px clamp(10px, ${10 / 768 * 100}vw, 24px);
    text-align: center;

    .body1{
        margin-top: clamp(6px, ${8 / 768 * 100}vw, 16px);
    }

    img{
        width: clamp(48px, ${56 / 768 * 100}vw, 76px);
        height: clamp(48px, ${56 / 768 * 100}vw, 76px);
    }

    *{
        color: #050505;
    }
`