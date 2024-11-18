import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from "../../helpers/wysiwyg-modification"

export default function FourTilesWithTitle({ data: { title, tekstWyrozniony, plaszki } }) {
    return (
        <Wrapper>
            <Container>
                    {title && <p className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />}
                    {tekstWyrozniony
                        ? <div className="title body1" dangerouslySetInnerHTML={{ __html: tekstWyrozniony }} />
                        : null}
                    <Grid>
                        {plaszki.map((el, index) => (
                            <Item  key={index}>
                                <img src={el.icon.localFile.publicURL} alt={el.icon.altText} />
                                <p className="text body1" dangerouslySetInnerHTML={{ __html: textParser(el.text) }}></p>
                            </Item>
                        ))}
                    </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment fourTilesWithTitle on WpPage_PageBuilder_Sections_FourTilesWithTitle {
    fourTilesWithTitle {
      title
      tekstWyrozniony
      plaszki {
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
    margin-top: var(--section-spacing);

    .h4{
        text-align: center;
        margin-bottom: 1rem;
        font-size: clamp(25px, 4.296875vw, 38px);
    }

    .title{
        text-align: center;
        display: grid;
        grid-gap: 8px;
        padding: 10px;
        background: var(--color-light);
        box-shadow: var(--shadow);
        border-radius: 4px;
    }
`

const Grid = styled.div`
    margin-top: clamp(24px, ${32 / 768 * 100}vw, 32px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-gap: 24px;
    }
`

const Item = styled.div`
    padding: 10px;
    background: var(--color-light);
    box-shadow: var(--shadow);
    border-radius: 4px;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;

    img{
        width: clamp(48px, ${56 / 768 * 100}vw, 76px);
        height: clamp(48px, ${56 / 768 * 100}vw, 76px);
    }

    &:first-child{
        background: var(--color-medium);
        p{color: #F2F4FF;}
    }

    .text{
        padding: 10px;
    }

`