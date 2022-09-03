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
                    <h2 className="h4" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                    <p className="body1" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                    <Grid>
                        {types.map(el => (
                            <Item key={el.title}>
                                <GatsbyImage className="image" image={el.img.localFile.childImageSharp.gatsbyImageData} alt={el.img.altText} />
                                <div className="text">
                                    <h3 className="h6" dangerouslySetInnerHTML={{ __html: textParser(el.title) }} />
                                    <p className="body2" dangerouslySetInnerHTML={{ __html: textParser(el.text) }} />
                                    {el.link.text && el.link.url
                                        ? <FilledButton to={el.link.url}>{el.link.text}</FilledButton>
                                        : <Placeholder />}
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
          text
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
    margin-top: 80px;
`

const Placeholder = styled.div`
    height: 48px;
`

const Content = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;

    .body1{
        max-width: 540px;
        margin: 24px auto 0 auto;
    }
`

const Grid = styled.div`
    margin-top: 48px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
`

const Item = styled.div`
    border-radius: 4px; 
    box-shadow: var(--shadow);
    background-color: var(--color-white);

    .image{
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    .text{
        padding: 24px;
        text-align: left;

        .body2{
            margin-top: 8px;
        }

        a{
            margin-top: 4px;
        }
    }
`