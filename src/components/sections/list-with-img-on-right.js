import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'
import { FilledButton, OutlinedButton } from "../atoms/buttons"
import { GatsbyImage } from "gatsby-plugin-image"
import Light from './../../images/check-light.svg'
import Medium from './../../images/check-medium.svg'

export default function ListWithImgOnRight({ data: { title, list, buttons, img, textUnderImg } }) {
    return (
        <Wrapper>
            <Container>
                <Content light={Light} medium={Medium} >
                    <div>
                        <h2 className="h6" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                        <div className="body1" dangerouslySetInnerHTML={{ __html: list }} />
                        <Buttons>
                            {buttons?.map((el, index) => {
                                if (index) {
                                    return <OutlinedButton className="button" to={el.link.url} target={el.link.target}>{el.link.title}</OutlinedButton>
                                }
                                return <FilledButton className="button" to={el.link.url} target={el.link.target}>{el.link.title}</FilledButton>
                            })}
                        </Buttons>
                    </div>
                    <div>
                        <GatsbyImage className="img" image={img.localFile.childImageSharp.gatsbyImageData} alt={img.altText} />
                        {textUnderImg
                            ? <span className="sub1" dangerouslySetInnerHTML={{ __html: textParser(textUnderImg) }}></span>
                            : null}
                    </div>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment listWithImgOnRight on WpPage_PageBuilder_Sections_ListWithImgOnRight {
    listWithImgOnRight {
      title
      list
      buttons{
        link {
            target
            title
            url
        }
    }
      textUnderImg
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

const Buttons = styled.div`
    display: grid;
    grid-gap: 8px;
`

const Content = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    align-items: center;
    grid-template-columns: auto clamp(280px, ${340 / 768 * 100}vw, 380px);
    grid-gap: 32px;

    .img{
        width: 100%;
    }

    @media (max-width: 768px) {
        align-items: unset;
    }

    @media (max-width: 640px) {
        display: flex;
        flex-direction: column-reverse;
        margin: 0 auto;
        grid-gap: 16px;

        .img{
            width: auto;
        }

        .sub1{
            max-width: 380px;
        }
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