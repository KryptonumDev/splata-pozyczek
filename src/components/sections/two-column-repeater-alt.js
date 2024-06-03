import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'
import { GatsbyImage } from "gatsby-plugin-image"
import { FilledButton, OutlinedButton } from "../atoms/buttons"

export default function TwoColumnRepeaterAlt({ data: { repeater } }) {
    return (
        <Wrapper>
            <Container>
                <Grid>
                    {repeater.map((el, index) => (
                        <Item key={index}>
                            <GatsbyImage className="img" image={el.img.localFile.childImageSharp.gatsbyImageData} alt={el.img.altText}/>
                            <div className="text-part">
                                <h3 className="h6" dangerouslySetInnerHTML={{ __html: textParser(el.title) }} />
                                <div className="body2" dangerouslySetInnerHTML={{ __html: el.text }} />
                                <div className="buttons">
                                    {el.buttons.map((inEl, index) => {
                                        if (index) {
                                            return <OutlinedButton key={inEl.link.title} className="second" target={inEl.link.target} to={inEl.link.url}>{inEl.link.title}</OutlinedButton>
                                        }
                                        return <FilledButton key={inEl.link.title} className="first" target={inEl.link.target} to={inEl.link.url}>{inEl.link.title}</FilledButton>
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
  fragment twoColumnRepeaterAlt on WpPage_PageBuilder_Sections_TwoColumnFlexAlt {
    twoColumnFlexAlt {
      repeater {
        title
        text
        buttons {
          link {
            target
            title
            url
          }
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

    .img{
        box-shadow: var(--shadow);
        border-radius: 4px;
    }
`

const Grid = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-gap: 48px; 

    @media (max-width: 860px){
        grid-gap: 36px;
    }
`

const Item = styled.div`
    display: grid;
    grid-template-columns: clamp(300px, ${340 / 1024 * 100}vw, 380px) auto;
    grid-gap: 32px;
    
    align-items: center;

    @media (max-width: 860px) {
        align-items: flex-start;
    }

    @media (max-width: 640px) {
        display: flex;
        flex-direction: column;
        grid-gap: 0;

        .img{
            margin: 0 0 16px 0 !important;
        }
    }

    @media (max-width: 480px) {
        .buttons{
            a{
                width: 100%;
                padding: 12px;
                text-align: center;
            }
        }
    }

    &:nth-child(2n){
        grid-template-columns: auto clamp(300px, ${340 / 1024 * 100}vw, 380px) ;

        .text-part{
            order: 1;
        }

        .img{
            order: 2;
        }

        @media (max-width: 640px) {
            flex-direction: column-reverse;
        }
    }

    &:nth-child(2n+1){
        flex-direction: row;

        .img{
        }

        @media (max-width: 640px) {
            flex-direction: column;
        }
    }

    .text-part{

        .h6{
            margin-bottom: clamp(8px, ${12 / 768 * 100}vw, 16px);
        }

        .body1{
            margin-top: 16px;
        }

        .body2{
            display: grid;
            grid-gap: clamp(12px, ${12 / 768 * 100}vw, 16px);

            p{
                color: #6F6F71;

                strong{
                    color: #050505;
                }
            }
        }

        .first{
            margin-top: 16px;
        }

        .second{
            margin-top: 8px;
        }

        a{
            text-align: center;
        }
    }
`