import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { GatsbyImage } from "gatsby-plugin-image"
import { textParser } from "../../helpers/wysiwyg-modification"
import { FilledButton, OutlinedButton } from "../atoms/buttons"

export default function TwoCards({ data: { cards } }) {
    return (
        <Wrapper>
            <Container className="container">
                <Grid>
                    {cards.map(el => (
                        <Item>
                            <GatsbyImage className="image" image={el.image.localFile.childImageSharp.gatsbyImageData} alt={el.image.altText} />
                            <div className="text">
                                <h3 className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(el.title) }} />
                                <p className="body1" dangerouslySetInnerHTML={{ __html: textParser(el.text) }} />
                                <div className="buttons">
                                    {el.buttons.map((el, index) => {
                                        if (index) {
                                            return <OutlinedButton className="link" target={el.link.target} to={el.link.url}> {el.link.title}</OutlinedButton>
                                        }
                                        return <FilledButton className="link" target={el.link.target} to={el.link.url}>{el.link.title}</FilledButton>
                                    })}
                                </div>
                            </div>
                        </Item>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment twoCards on WpPage_Blocks_pageBuilder {
    twoCards {
      cards{
        image{
            altText
            localFile{
                childImageSharp{
                    gatsbyImageData
                }
            }
        }
        title
        text
        buttons{
            link{
                title
                url
                target
            }
        }
      }
    }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);

    .container{
        max-width: 1000px;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;    

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`

const Item = styled.div`
    .image{
        border-radius: 4px;
        box-shadow: var(--shadow);
    }

    .h6{
        margin-top: 16px;
    }

    .body1{
        margin-top: 8px;
        margin-bottom: 16px;
    }

    .buttons{
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
    }

    @media (max-width: 768px) {
        box-shadow: var(--shadow);
        border-radius: 4px;
        .h6{
            margin-top: 6px;
        }
        .text{
            padding: 10px;
        }
    }
    @media (max-width: 600px) {
        max-width: 480px;
        margin: 0 auto;
    }
`