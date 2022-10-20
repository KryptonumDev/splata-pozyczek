import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'

export default function EffectiveSolutions({ data: { title, boldText, text, situations } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <TextContent>
                        <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                        <p className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(boldText) }} />
                        <p className="body1" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                    </TextContent>
                    <Grid>
                        {situations.map(el => (
                            <Item key={el.title}>
                                <img alt={el.icon.altText} src={el.icon.localFile.publicURL} />
                                <div className="text">
                                    <h3 className="body1">{el.title}</h3>
                                    <p className="body2" dangerouslySetInnerHTML={{ __html: textParser(el.text) }} />
                                </div>
                            </Item>
                        ))}
                    </Grid>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
fragment effectiveSolutions on WpPage_PageBuilder_Sections_EffectiveSolutions {
    effectiveSolutions {
      title
      boldText
      text
      situations {
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
`

const Content = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: 768px) {
        grid-template-columns: auto;
        grid-gap: 16px;
    }
`

const TextContent = styled.div`
    max-width: 466px;

    @media (max-width: 768px){
        max-width: 600px;
    }

    .h6{
        margin-top: clamp(8px, ${8 / 768 * 100}vw, 12px);
    }

    .body1{
        margin-top: clamp(12px, ${12 / 768 * 100}vw, 24px);
        color: #6F6F71;
    }
`

const Grid = styled.div`
    display: grid;
    grid-gap: 8px;
    
`

const Item = styled.div`
    padding: clamp(8px, ${10 / 768 * 100}vw, 10px);
    display: grid;
    grid-template-columns: auto auto;
    box-shadow: var(--shadow);
    border-radius: 4px;
    background-color: var(--color-white);

    img{
        width: clamp(48px, ${56 / 768 * 100}vw, 76px);
        height: clamp(48px, ${56 / 768 * 100}vw, 76px);
    }

    &:nth-child(2){
        background-color: var(--color-dark);

        h3{
            color: #FEF5F5;
        }
        p{
            color: #DAE2FF;
        }
        a{
            color: #FCCF4F;
        }

        .body2{
            color: #DAE2FF !important;

            strong{
                color: #F2F4FF;
            }
            span{
                font-weight: 600;
            }
            a{
                font-weight: 600;
            }
        }
    }

    .text{
        padding: clamp(8px, ${10 / 768 * 100}vw, 10px);

        h3{
            margin-bottom: clamp(2px, ${4 / 768 * 100}vw, 4px);
            font-weight: 700;
        }

        .body2{
            font-weight: 400;
            color: #6E6E70;
        }
    }
`