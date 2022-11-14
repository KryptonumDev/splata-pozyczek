import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from "../../helpers/wysiwyg-modification"

export default function TwoColumnsTextAndIconsList({ data: { title, subTitle, text, repeater } }) {
    return (
        <Wrapper>
            <Container>
                <Flex>
                    <div>
                        <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                        <p className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(subTitle) }} />
                        <p className="body2 text" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                    </div>
                    <Grid>
                        {repeater.map((el, index) => (
                            <Item key={index}>
                                <img src={el.icon.localFile.publicURL} alt={el.icon.altText} />
                                <p className="body2" dangerouslySetInnerHTML={{ __html: textParser(el.text) }} />
                            </Item>
                        ))}
                    </Grid>
                </Flex>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment twoColumnsTextAndIconsList on WpPage_PageBuilder_Sections_TwoColumnsTextAndIconsList {
    twoColumnsTextAndIconsList {
        title
        subTitle
        text
        repeater{
            text
            icon{
                altText
                localFile{
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
        font-size: clamp(25px, ${29 / 768 * 100}vw, 38px);
    }

    .h6{
        margin-top: 16px;
        margin-bottom: clamp(16px, ${24 / 768 * 100}vw, 40px);    
        color: #6F6F71;
    }

    .text{
        max-width: 484px;
        padding: 10px 70px 10px 32px;
        background-color: var(--color-light);
        box-shadow: var(--shadow);
        border-radius: 4px;

        @media (max-width: 900px) {
            padding: 10px 32px;
        }
    }
`

const Flex = styled.div`
    display: grid;
    grid-template-columns: 587fr 455fr;
    grid-gap: 32px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 560px) {
        grid-template-columns: 1fr ;
        grid-gap: 16px;
    }
`

const Grid = styled.div`
    display: grid;
    grid-gap: 16px;
`

const Item = styled.div`
    display: grid;
    grid-template-columns: clamp(28px, ${32 / 768 * 100}vw, 32px) auto;
    grid-gap: clamp(8px, ${8 / 768 * 100}vw, 16px);

    img{
        width: clamp(28px, ${32 / 768 * 100}vw, 32px);
        height: clamp(28px, ${32 / 768 * 100}vw, 32px);
    }
`