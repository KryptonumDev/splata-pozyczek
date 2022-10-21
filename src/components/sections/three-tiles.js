import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from "../../helpers/wysiwyg-modification"

export default function ThreeTiles({ data: { title, repeater } }) {
    return (
        <Wrapper>
            <Container className="container">
                <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                <Grid>
                    {repeater.map(el => (
                        <Item>
                            <img src={el.icon.localFile.publicURL} alt={el.icon.altText} />
                            <p className="h6" dangerouslySetInnerHTML={{ __html: textParser(el.text) }} />
                        </Item>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment threeTiles on WpPage_PageBuilder_Sections_ThreeTiles {
    threeTiles {
        title
        repeater{
            icon{
                altText
                localFile{
                    publicURL
                }
            }
            text
        }
      }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);

    .h4{
        margin-bottom: clamp(24px, ${32 / 768 * 100}vw, 32px);
        text-align: center;
    }

    .container{
        max-width: 1100px;
    }
`

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
`

const Item = styled.div`
    border-radius: 4px;
    box-shadow: var(--shadow);
    background-color: var(--color-light);
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: clamp(24px, ${32 / 768 * 100}vw, 32px);
    text-align: center;
    width: 30%;

    &:first-child{
        background-color: var(--color-medium);

        *{
            color: #F2F4FF;
        }
    }

    @media (max-width: 980px) {
        width: 46%;
    }   
    @media (max-width: 560px) {
        width: 100%;
    }

    img{
        box-shadow: var(--shadow);
        border-radius: 50%;
        width: clamp(48px, ${56 / 768 * 100}vw, 76px);
        height: clamp(48px, ${56 / 768 * 100}vw, 76px);
        margin: 0 auto;
        margin-bottom: clamp(6px, ${8 / 768 * 100}vw, 12px);
    }
`