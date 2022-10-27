import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'
import { GatsbyImage } from "gatsby-plugin-image"
import { FilledButton, OutlinedButton } from "../atoms/buttons"

export default function ExtendedListWithImgOnRight({ data: { title, listTitle, list, textTitle, text, buttons, imageAnnotation, image } }) {
    return (
        <Wrapper>
            <Container className="container">
                {title
                    ? <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                    : null}
                <Content>
                    <div>
                        {listTitle
                            ? <span className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(listTitle) }} />
                            : null}
                        <div className="list body1" dangerouslySetInnerHTML={{ __html: list }} />
                        <span className="body1 bold" dangerouslySetInnerHTML={{ __html: textParser(textTitle) }}></span>
                        <p className="body2" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                        <div className="buttons">
                            {buttons.map((el, index) => {
                                if (index) {
                                    return <OutlinedButton target={el.link.target} to={el.link.url}>{el.link.title}</OutlinedButton>
                                }
                                return <FilledButton target={el.link.target} to={el.link.url}>{el.link.title}</FilledButton>
                            })}
                        </div>
                    </div>
                    <div className="wrapImg">
                        <GatsbyImage className="image" image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
                        <span className="sub1" dangerouslySetInnerHTML={{ __html: textParser(imageAnnotation) }} />
                    </div>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment extendedListWithImgOnRight on WpPage_PageBuilder_Sections_ExtendedListWithImgOnRight {
    extendedListWithImgOnRight {
      title
      listTitle
      list
      textTitle
      text
      buttons {
        link {
          url
          title
          target
        }
      }
      imageAnnotation
      image {
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
        max-width: 668px;
      font-size: clamp(28px, 4.296875vw, 38px);
    }
`

const Content = styled.div`
    margin-top: clamp(24px, ${32 / 768 * 100}vw, 40px);
    display: grid;
    grid-template-columns: auto clamp(340px, ${340 / 1024 * 100}vw, 380px);
    align-items: center;
    grid-gap: 32px;

    @media (max-width: 1024px) {
        align-items: flex-start;
    }

    @media (max-width: 767px) {
        display: flex;
        gap: 0;
        flex-direction: column-reverse;
        max-width: 600px;

        .wrapImg{
            max-width: 380px;
            margin-bottom: 16px;    
        }
    }

    .bold{  
        font-weight: 600;
    }

    .body2{
        margin-top: 8px;
    }

    .sub1{
        letter-spacing: 0em;
        margin-top: 8px;
        display: block;
    }

    .buttons{
        margin-top: 16px;
        grid-gap: 8px;
        display: grid;

        @media (max-width: 767px) {
            grid-template-columns: auto auto;
            width: fit-content;
        }

        @media (max-width: 640px){
            grid-template-columns: 1fr;
            width: 100%;
            a{
                margin: 0 auto;
                text-align: center;
            }
        }

        @media (max-width: 480px) {
            a{
                width: 100%;
                padding: 12px;
            }
        }
    }

    .h6{
    }

    .image{
        border-radius: 4px;
        box-shadow: var(--shadow);
    }

    .list{
        
        ol,ul{
            margin: 16px 0;
            list-style: none;
            display: grid;
            grid-gap: clamp(12px, ${12 / 768 * 100}vw, 16px);

            li{
                counter-increment: int;
                padding-left: 64px;
                position: relative;

                &::before{
                    content: counter(int);
                    position: absolute;
                    left: 16px;
                    top: 0;
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background-color: #DAE2FF;
                }

                @media (max-width: 1024px) {
                    padding-left: 40px;

                    &::before{
                        left: 0;
                    }
                }

                &:first-child{
                    &::before{
                        background-color: var(--color-medium);
                        color: #F2F4FF;
                    }
                }
            }
        }
    }

`