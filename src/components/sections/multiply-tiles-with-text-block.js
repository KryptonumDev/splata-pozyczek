import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from "../../helpers/wysiwyg-modification"

export default function MultiplyTilesWithTextBlock({ data: { title, text, subTitle, tiles } }) {
    return (
        <Wrapper>
            <Container>
                <h2 className="h4 arsenal main" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                <p className="body1 text" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                <h3 className="h4 arsenal sub" dangerouslySetInnerHTML={{ __html: textParser(subTitle) }} />
                <Grid>
                    {tiles.map((el, index) => (
                        <Item key={index} >
                            <img src={el.icon.localFile.publicURL} alt={el.icon.altText} />
                            <h4 className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(el.title) }} />
                            <p className="body2" dangerouslySetInnerHTML={{ __html: textParser(el.text) }} />
                        </Item>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment multiplyTilesWithTextBlock on WpPage_PageBuilder_Sections_MultiplyTilesWithTextBlock {
    multiplyTilesWithTextBlock {
        tiles : listaKafelkow{
            icon{
                altText
                localFile{
                    publicURL
                }
            }
            title
            text
        }
        title
        text
        subTitle
      }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section-spacing);

    .main{
        text-align: center;
        max-width: var(--inner-container-width);
        margin: 0 auto;
        margin-bottom: 16px;
    }

    .text{
        padding: 10px 24px;
        box-shadow: var(--shadow);
        border-radius: 4px;
        background-color: var(--color-light);
        text-align: center;
        max-width: var(--inner-container-width);
        margin: 0 auto;
        margin-bottom: clamp(24px, ${32 / 768 * 100}vw, 48px);
    }

    .sub{
        text-align: center;
        max-width: var(--inner-container-width);
        margin: 0 auto;
        margin-bottom: clamp(24px, ${32 / 768 * 100}vw, 32px);
    }
`

const Grid = styled.div`
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
    justify-content: space-evenly;

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: clamp(16px, ${32 / 768 * 100}vw, 32px);
    }
    @media (max-width: 560px) {
        grid-template-columns: 1fr;
        grid-gap: 16px;
    }
`

const Item = styled.div`
    width: 31%;
    padding: clamp(24px, ${24 / 768 * 100}vw, 32px);
    border-radius: 4px;
    box-shadow: var(--shadow);
    background-color: var(--color-light);
    text-align: center;

    @media (max-width: 1024px){
        width: 100%;
    }


    &:first-child{
        background-color: var(--color-medium);
        *{
            color: #F2F4FF;
        }
    }

    img{
        display: block;
        margin: 0 auto 8px auto;
        width: clamp(48px, ${56 / 768 * 100}vw, 76px);
        height: clamp(48px, ${56 / 768 * 100}vw, 76px);
    }

    .h6{

    }

    .body2{
        margin-top: 8px;
    }
`

