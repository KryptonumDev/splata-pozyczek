import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { GatsbyImage } from "gatsby-plugin-image"
import { textParser } from './../../helpers/wysiwyg-modification'
import { FilledButton } from "../atoms/buttons"
import Light from './../../images/check-light.svg'
import Medium from './../../images/check-medium.svg'

export default function ListWithImgOnLeft({ data: { title, text, list, link, img, textUnderImg } }) {
    return (
        <Wrapper>
            <Container className="container">
                <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                <Content light={Light} medium={Medium} >
                    <div>
                        <GatsbyImage className="img" image={img.localFile.childImageSharp.gatsbyImageData} alt={img.altText} />
                        <p className="body1" dangerouslySetInnerHTML={{__html: textParser(textUnderImg)}}/>
                    </div>
                    <div>
                        <div className="body2" dangerouslySetInnerHTML={{ __html: list }} />
                        {text
                            ? <span className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                            : null}
                        <FilledButton className="link" target={link.target} to={link.url}>{link.title}</FilledButton>
                    </div>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment listWithImgOnLeft on WpPage_PageBuilder_Sections_ListWithImgOnLeft {
    listWithImgOnLeft {
      title
      text
      list
      textUnderImg
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

    .container{
        max-width: 1000px;
    }

    .h4{
        margin-bottom: clamp(24px, ${32 / 768 * 100}vw, 48px);
        font-size: clamp(28px, 4.296875vw, 38px);
    }
`

const Content = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: clamp(280px, ${340 / 768 * 100}vw, 380px) auto;
    grid-gap: clamp(16px, ${16 / 768 * 100}vw, 32px);
    margin: 0 auto;

    .body1{
        padding: 10px;
        box-shadow: var(--shadow);
        border-radius: 4px;
        background-color: var(--color-light);
        text-align: center;
    }

    @media (max-width: 1024px) {
        align-items: flex-start;
    }

    .img{
        width: 100%;
    }

    @media (max-width: 640px) {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        grid-gap: 16px;

        .img{
            width: auto;
        }

        .sub1{
            max-width: 380px;
        }
    }

    @media (max-width: 480px) {
        .link{
            padding: 12px;
            width: 100%;
            text-align: center;
        }
    }

    .link{
        margin-top: 16px;
    }

    .h6{
        margin: 16px 0 0 0;
        display: block;
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
            padding-left: clamp(44px, ${44 / 768 * 100}vw, 48px);
            min-height: 32px;
            position: relative;
            list-style: none;
            color: #6F6F71;

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
        letter-spacing: 0;
    }

    .img{
        box-shadow: var(--shadow);
        border-radius: 4px;
    }
`