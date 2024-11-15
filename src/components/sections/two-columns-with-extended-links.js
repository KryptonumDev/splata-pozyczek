import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from "../../helpers/wysiwyg-modification"
import { GatsbyImage } from "gatsby-plugin-image"

export default function TwoColumnsWithExtendedLinks({ data: { title, text, links } }) {
    return (
        <Wrapper>
            <Container className="container">
                <Grid>
                    <div className="text">
                        <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                        <div className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                    </div>
                    <div>
                        {links.map((el, index) => (
                            <Item key={index} to={el.link.url} target={el.link.target || '_self'}>
                                <GatsbyImage className="image" image={el.img.localFile.childImageSharp.gatsbyImageData} alt={el.img.altText} />
                                <div>
                                    <div className="h6">{el.link.title}</div>
                                    <div className="body1" dangerouslySetInnerHTML={{ __html: textParser(el.text) }} />
                                </div>
                            </Item>
                        ))}
                    </div>
                </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment twoColumnsWithExtendedLinks on WpPage_PageBuilder_Sections_TwoColumnsWithExtendedLinks {
    twoColumnsWithExtendedLinks {
      title
      text
      links {
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

const Item = styled(Link)`
    display: grid;
    grid-template-columns: 220px auto;
    grid-gap: clamp(8px, ${16 / 768 * 100}vw, 24px);
    align-items: center;
    margin-top: clamp(16px, ${32 / 768 * 100}vw, 32px);
    text-decoration: none;

    &:first-child{
        margin-top: 0;
    }

    .h6{
        text-decoration: underline;
    }

    .body1{
        margin-top: 8px;
        p{
            color: #6E6E70;
        }
    }

    .image{
        border-radius: 8px;
        box-shadow: var(--shadow);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;

        .image{
            width: fit-content;
        }
    }
`

const Wrapper = styled.section`
    margin-top: var(--section-spacing);

    .container{
        max-width: 1100px;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 484fr 587fr;
    grid-gap: clamp(24px, ${32 / 768 * 100}vw, 32px);

    .text{
        .h4{

        }

        .h6{
            margin-top: clamp(8px, ${16 / 768 * 100}vw, 24px);
            color: #6E6E70;
        }
    }

    @media (max-width: 840px) {
        grid-template-columns: 1fr;
    }
`