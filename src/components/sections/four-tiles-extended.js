import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'

export default function FourTilesExtended({ data: { title, text, tiles } }) {
    return (
        <Wrapper>
            <Container>
                <div className="flex">
                    <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                    <p className="text body1" dangerouslySetInnerHTML={{ __html: text }} />
                </div>
                <Grid>
                    {tiles.map(el => (
                        <Item>
                            <div className="mobile-grid">
                                <img src={el.icon.localFile.publicURL} alt={el.icon.altText} />
                                <h3 className="h6 arsenal mobile">{el.title}</h3>
                            </div>
                            <div>
                                <h3 className="h6 arsenal desctop">{el.title}</h3>
                                <div className="body2" dangerouslySetInnerHTML={{ __html: el.text }} />
                            </div>
                        </Item>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment fourTilesExtended on WpPage_Blocks_pageBuilder {
    fourTilesExtended {
      title
      text
      tiles {
        title
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

    .flex{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 32px;
        max-width: 1000px;
        margin: 0 auto clamp(24px, ${24 / 768 * 100}vw, 32px) auto;

        @media (max-width: 640px) {
            grid-template-columns: 1fr;
            grid-gap: 16px;
        }
    }

    .h4{
        margin: 0 auto;
        font-size: clamp(32px, 4.296875vw, 38px);

        @media (max-width: 350px){
            font-size: 27px;
        }
    }

    .text{
        display: grid;
        grid-gap: 8px;
        height: fit-content;
        p{
            color: #6F6F71;
        }
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: clamp(24px, ${24 / 768 * 100}vw, 32px);
    max-width: 1000px;
    margin: 0 auto;

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`

const Item = styled.div`
    background-color: var(--color-light);
    border-radius: 4px;
    box-shadow: var(--shadow);

    display: grid;
    grid-template-columns: auto auto;
    padding: clamp(16px, ${16 / 768 * 100}vw, 24px);
    grid-gap: 16px;

    @media (max-width: 860px){
        grid-template-columns: 1fr;
        grid-gap: 4px;

        .mobile-grid{
            display: grid;
            grid-template-columns: auto auto;
            align-items: center;
            grid-gap: 8px;
            width: fit-content;
        }
    }

    .body2{
        margin-top: clamp(6px, ${8 / 768 * 100}vw, 12px);
        display: grid;
        grid-gap: 8px;
        p{
            color: #6F6F71;
        }
    }

    .h6{
        &.mobile{
            display: none;
        }

        @media (max-width: 860px) {
            &.mobile{
                display: block;
            }

            &.desctop{
                display: none;
            }
        }
    }

    img{
        width: clamp(40px, ${40 / 768 * 100}vw, 52px);
        height: clamp(40px, ${40 / 768 * 100}vw, 52px);
    }

    *{
        color: #050505;
    }
`