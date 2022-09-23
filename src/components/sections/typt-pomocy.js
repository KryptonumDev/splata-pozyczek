import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { FilledButton } from "../atoms/buttons"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'

export default function HelpTypes({ data: { title, text, types } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                    <p className="body1" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                    <Grid>
                        {types.map(el => (
                            <Item key={el.title}>
                                <GatsbyImage className="image" image={el.img.localFile.childImageSharp.gatsbyImageData} alt={el.img.altText} />
                                <div className="text">
                                    <h3 className="h6" dangerouslySetInnerHTML={{ __html: textParser(el.title) }} />
                                    <p className="body2" dangerouslySetInnerHTML={{ __html: textParser(el.text) }} />
                                    {el.link
                                        ? <FilledButton target={el.link.target} to={el.link.url}>{el.link.title}</FilledButton>
                                        : null}
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
fragment types on WpPage_Blocks_pageBuilder {
    types {
      title
      text
      types {
        title
        text
        link {
            url
            title
            target
        }
        img {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
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
    text-align: center;

    .body1{
        max-width: 540px;
        margin: clamp(16px, ${16 / 768 * 100}vw, 24px) auto 0 auto;
        color: #75757A;
        font-weight: 400;
        
        a,span,strong{
            font-weight: 600;
        }
    }

    .h4{
        font-size: clamp(30px, 4.296875vw, 38px);
    }

    .h4, .h6{
        font-family: 'Arsenal';
    }

    @media (max-width: 640px) {
        text-align: left;
        .body1{
            margin: clamp(16px, ${16 / 768 * 100}vw, 24px) 0 0 0;
        }
    }
`

const Grid = styled.div`
    margin-top: clamp( 36px, ${36 / 768 * 100}vw, 48px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        grid-gap: 24px;
    }
`

const Item = styled.div`
    border-radius: 4px; 
    box-shadow: var(--shadow);
    background-color: var(--color-white);
    max-width: 480px;
    margin: 0 auto;

    .image{
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        height: 200px;
    }

    .text{
        padding: 24px;
        text-align: left;

        .body2{
            margin-top: clamp(4px, ${8 / 768 * 100}vw, 8px);
            color: #75757A;
        }

        a{
            margin-top: 16px;
            font-size: clamp(14px, ${14 / 768 * 100}vw, 16px );
            text-align: center;
            box-sizing: border-box;

            @media (max-width: 480px) {
                width: 100%;
                padding: 12px;
            }
        }
    }
`