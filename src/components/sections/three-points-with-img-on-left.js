import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { GatsbyImage } from "gatsby-plugin-image"
import { textParser } from './../../helpers/wysiwyg-modification'
import Light from './../../images/check-light.svg'
import Dark from './../../images/check-dark.svg'
import { FilledButton } from "../atoms/buttons"

export default function ThreePointsWithImgOnLeft({ data: { title, text, link, img, points } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <GatsbyImage className="img" image={img.localFile.childImageSharp.gatsbyImageData} alt={img.altText} />
                    <div className="content">
                        <h2 className="arsenal h4" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                        <Grid>
                            {points.map(el => (
                                <Item light={Light} dark={Dark}>
                                    <div className="text">
                                        <h3 className="body1" dangerouslySetInnerHTML={{ __html: textParser(el.title) }} />
                                        <p className="body2" dangerouslySetInnerHTML={{ __html: textParser(el.text) }} />
                                    </div>
                                </Item>
                            ))}
                        </Grid>
                        <p className="body2 sub" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                        <FilledButton className="link" target={link.target} to={link.url}>{link.title}</FilledButton>
                    </div>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment threePointsWithImgOnLeft on WpPage_PageBuilder_Sections_ThreePointsWithImgOnLeft {
    threePointsWithImgOnLeft {
      title
      text
      points {
        title
        text
      }
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
`

const Wrapper = styled.section`
    margin-top: var(--section);
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;

    .content{
        max-width: 500px;
        margin-left: 32px;
    }

    .h4{
        margin-bottom: 16px;
    }

    .img{
        width: 100%;
        max-width: 380px;
        min-width: 340px;
        box-shadow: var(--shadow);
        border-radius: 4px;
        height: fit-content;
    }

    .sub{
        margin-top: 32px;
        margin-bottom: 8px;
        color: #6F6F71;
    }

    @media (max-width: 860px) {
        align-items: flex-start;
    }

    @media (max-width: 720px) {
        flex-direction: column;

        .content{
            max-width: 600px;
            margin-left: 0;
            margin-top: 24px;
        }
    }

    @media (max-width: 480px){
        .sub{
            margin-top: 16px;
        }
    }

    @media (max-width: 450px) {
        .link{
            width: 100%;
            padding: 12px;
            text-align: center;
        }

        .img{
            min-width: unset;
        }
    }
`

const Grid = styled.div`
    display: grid;
    grid-gap: 8px;
`

const Item = styled.div`
    max-width: 500px;
    padding: 10px;
    border-radius: 4px;
    box-shadow: var(--shadow);

    .text{
        padding: 10px 10px 10px 82px;
        position: relative;
        min-height: 76px;

        @media (max-width: 768px){
            padding: 10px 10px 10px 62px;
        }

        .body1{
            margin-bottom: 4px;
            font-weight: 600;
        }

        .body2{
            a{
                color: #FCCF4F;
            }
        }

        &::before{
            content: url(${props => props.light});
            position: absolute;
            left: 0;
            top: 0;
            transform-origin: 0 0;
            transform: scale(2.25);

            @media (max-width: 768px) {
                transform: scale(1.625);
            }
        }
    }

    &:nth-child(2){
        background-color: var(--color-medium);
        .text{

            .body1{
                margin-bottom: 4px;
                color: #FEF5F5;
            }

            .body2{
                color: #DAE2FF;
            }

            &::before{
                content: url(${props => props.dark});
            }
        }
    }
`