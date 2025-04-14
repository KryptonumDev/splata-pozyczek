import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { GatsbyImage } from "gatsby-plugin-image"
import { textParser } from '../../helpers/wysiwyg-modification'
import { FilledButton, OutlinedButton } from "../atoms/buttons"


export default function TextImage({ data: { title, subTitle, text, order, buttonA, buttonB, imgDescription, img, buttonLayout, buttonLayoutJustify } }) {
    const buttonsLayouts = `${buttonLayout} ${buttonLayoutJustify}`;
    
    return (
        <Wrapper>
            <Container>
                <Content>
                    {title && <div className="h4 arsenal" dangerouslySetInnerHTML={{ __html: title }} />}
                    <Grid className={order}>
                        <div className="img-wrap">
                            {img && <GatsbyImage className="img" alt={img?.altText} image={img.localFile.childImageSharp.gatsbyImageData} />}
                            {imgDescription && <div className="under-img" dangerouslySetInnerHTML={{ __html: textParser(imgDescription) }} />}
                        </div>
                        <div className="text">
                            {subTitle && <div className="h6" dangerouslySetInnerHTML={{ __html: subTitle }} />}
                            <div className="body1" dangerouslySetInnerHTML={{ __html: text }} />
                            <Buttons className={buttonsLayouts}>
                                {buttonA && <FilledButton target={buttonA.target} to={buttonA.url}>{buttonA.title}</FilledButton>}
                                {buttonB && <OutlinedButton target={buttonB.target} to={buttonB.url}>{buttonB.title}</OutlinedButton>}
                            </Buttons>
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
      buttonA {
            url
            title
            target
        }
      buttonB {
            url
            title
            target
        }
      buttonLayout
      buttonLayoutJustify
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
    margin-top: var(--section-spacing);
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
        box-shadow: var(--shadow);
        border-radius: 4px;
        background-color: var(--color-light);
    }

    .img{
        border-radius: 4px;
        width: 100%;
    }

    .under-img{
        padding: 10px;
        text-align: center;
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
const Buttons = styled.div`
    display: grid;
    gap: 0.5rem 1rem;
    padding-top: 2rem;
    &.vertical{
        &.justify-center{
            justify-items: center;
        }
        &.justify-start{
            justify-items: flex-start;
        }
        &.justify-end{
            justify-items: flex-end;
        }
    }
    &.horizontal{
        grid-auto-flow: column;
        &.justify-center{
            justify-content: center;
        }
        &.justify-start{
            justify-content: flex-start;
        }
        &.justify-end{
            justify-content: flex-end;
        }
    }
`