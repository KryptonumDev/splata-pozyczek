import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'
import { FilledButton } from "../atoms/buttons"
import { GatsbyImage } from "gatsby-plugin-image"
import Light from './../../images/check-light.svg'
import Medium from './../../images/check-medium.svg'

export default function ListWithImgOnLeftRepeater({ data: { title, text, repeater } }) {
    return (
        <Wrapper>
            <Container>
                <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                <Grid>
                    {repeater.map(el => (
                        <Content light={Light} medium={Medium} >
                            <GatsbyImage className="img" image={el.img.localFile.childImageSharp.gatsbyImageData} alt={el.img.altText} />
                            <div>
                                <h2 className="h6" dangerouslySetInnerHTML={{ __html: textParser(el.title) }} />
                                <div className="body1" dangerouslySetInnerHTML={{ __html: el.list }} />
                                <FilledButton className="button" to={el.link.url} target={el.link.target}>{el.link.title}</FilledButton>
                            </div>
                        </Content>
                    ))}
                </Grid>
                <h3 className="h5 arsenal" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment listWithImgOnLeftRepeater on WpPage_Blocks_pageBuilder {
    listWithImgOnLeftRepeater : listWithImgOnRightRepeater {
      title
      text
      repeater {
        title
        list
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

    .h4{
        max-width: 762px;
        text-align: center;
        margin: 0 auto;
        font-size: clamp(28px, 4.296875vw, 38px);
    }

    .h5{
        max-width: 762px;
        text-align: center;
        margin: 0 auto;
    }
`

const Grid = styled.div`
    display: grid;
    grid-gap: clamp(24px, ${32 / 768 * 100}vw, 64px);
    margin-top: clamp(24px, ${32 / 768 * 100}vw, 64px);
    margin-bottom: clamp(24px, ${32 / 768 * 100}vw, 32px);
`

const Content = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    align-items: center;
    grid-template-columns: clamp(280px, ${340 / 768 * 100}vw, 380px) auto;
    grid-gap: 32px;

    .img{
        margin-bottom: clamp(0px, ${64 / 1920 * 100}vw, 64px);
        box-shadow: var(--shadow);
        border-radius: 4px;

        @media (max-width: 640px){
            margin-bottom: 0;
        }
    }

    @media (max-width: 640px) {
        display: flex;
        flex-direction: column;
        max-width: 380px;
        margin: 0 auto;
        grid-gap: 16px;
    }

    .body1{
        margin: 16px 0;
    }

    .button{
        @media (max-width: 640px){
            padding: 10px;
            width: 100%;
            text-align: center;
        }
    }

    ul, ol{
        display: grid;
        grid-gap: 16px;

        @media (max-width: 640px){
            grid-gap: 12px;
        }

        li{
            padding-left: clamp(44px, ${44 / 768 * 100}vw, 64px);
            min-height: 32px;
            padding-top: 5.5px;
            position: relative;
            list-style: none;
            color: #75757A;

            @media (max-width: 640px){
                padding-left: 32px;
                min-height: 24px;
            }

            span{
                font-weight: 600;
            }

            strong{
                color: #000;
            }

            a{
                color: #3B5BA9;
                font-weight: 600;
            }

            &::before{
                content: url(${props => props.light});
                position: absolute;
                left: clamp(4px, ${4 / 768 * 100}vw, 16px);
                top: 0;
                width: 32px;
                height: 32px;
                position: absolute;

                @media (max-width: 640px){
                    transform: scale(.75);
                    left: 0;
                }
            }

            &:first-child{
                &::before{
                    content: url(${props => props.medium});
                }
            }
        }
    }

    ol li{
        counter-increment: int;
        &::before{
            content: counter(int) !important;
            background: #DAE2FF;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
        }

        &:first-child{
            &::before{
                color: #fff;
                background-color: var(--color-medium);
            }
        }
    }

    .sub1{
        display: block;
        margin-top: 8px;
    }
`