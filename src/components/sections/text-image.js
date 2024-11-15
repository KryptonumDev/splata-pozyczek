import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { GatsbyImage } from "gatsby-plugin-image"
import { textParser } from '../../helpers/wysiwyg-modification'

export default function TextImage({ data: { title, subTitle, text, order, imgDescription, img } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    {title && <p className="h4" dangerouslySetInnerHTML={{ __html: textParser(title) }} />}
                    <Grid className={order}>
                        <div className="img-wrap">
                            <GatsbyImage className="img" alt={img.altText} image={img.localFile.childImageSharp.gatsbyImageData} />
                            {imgDescription && <span className="sub1" dangerouslySetInnerHTML={{ __html: textParser(imgDescription) }} />}
                        </div>
                        <div className="text">
                            {subTitle && <h3 className="h6" dangerouslySetInnerHTML={{ __html: textParser(subTitle) }} />}
                            <div className="body1" dangerouslySetInnerHTML={{ __html: text }} />
                        </div>
                    </Grid>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment textImage on WpPage_PageBuilder_Sections_TextImage {
    textImage {
      title
      subTitle
      text
      order
      imgDescription
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
`

const Wrapper = styled.section`
    margin-top: var(--section);
`

const Content = styled.div`
    margin: 0 auto;
`

const Grid = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 1rem;
    
        
    @media (min-width: 769px) {
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
        &.img-on-right{
            grid-template-columns: 2fr 1fr;
            .img-wrap{
                order: 2;
            }
        }
    }


    .img-wrap{
        justify-self: center;
        .sub1{
            display: block;
            margin-top: 0.5rem;
        }
    }

    .img{
        border-radius: 4px;
        box-shadow: var(--shadow);
        width: 100%;
    }

    .text{
        .h6{
            margin-bottom: 1rem;
        }
        .body1{
            display: grid;
            gap: 1rem;
            p{
                color: #6F6F71;
            }
        }
    }
`