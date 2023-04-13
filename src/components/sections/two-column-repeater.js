import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'
import { GatsbyImage } from "gatsby-plugin-image"
import { FilledButton, OutlinedButton } from "../atoms/buttons"

export default function TwoColumnRepeater({ data: { title, text, repeater } }) {
    return (
        <Wrapper>
            <Container>
                <h2 className="h4" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                <p className="body1 text" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                <Grid>
                    {repeater.map((el, index) => (
                        <Item key={index}>
                            {el.videoLink
                                ? <iframe loading="lazy" src={el.videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                : <GatsbyImage className="img" image={el.img?.localFile?.childImageSharp?.gatsbyImageData} />}
                            <div className="text-part">
                                <h3 className="h6" dangerouslySetInnerHTML={{ __html: textParser(el.title) }} />
                                <div className="body2" dangerouslySetInnerHTML={{ __html: el.text }} />
                                {el.tytulPrzyciskow
                                    ? <p className="body1" dangerouslySetInnerHTML={{ __html: textParser(el.tytulPrzyciskow) }} />
                                    : null}
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
  fragment twoColumnRepeater on WpPage_PageBuilder_Sections_TwoColumnFlex {
    twoColumnFlex {
      title
      text
      repeater {
        tytulPrzyciskow
        title
        text
        buttons {
          link {
            target
            title
            url
          }
        }
        videoLink
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
        margin: 0 auto;
        margin-bottom: 24px;
        text-align: center;
        max-width: 1000px;
        font-family: 'Arsenal';

        @media (max-width: 860px){
            margin-bottom: 16px;
        }
    }

    .text{
        max-width: 540px;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 48px;

        @media (max-width: 860px){
            margin-bottom: 32px;
        }
    }

    .img, iframe{
        height: fit-content;
        display: block;
        box-shadow: var(--shadow);
        border-radius: 4px;
        min-width: 400px;
        width: 100%;
        aspect-ratio: 1.77735849057/1;
    }
`

const Grid = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-gap: 100px; 

    @media (max-width: 860px){
        grid-gap: 36px;
    }
`

const Item = styled.div`
    display: flex;
    align-items: center;

    &:nth-child(2n){
        flex-direction: row-reverse;
        .img, iframe{
            margin-left: 32px;
        }
    }

    &:nth-child(2n+1){
        flex-direction: row;
        .img, iframe{
            margin-right: 32px;
        }
    }

    .text-part{
        max-width: 380px;

        .h6{
            margin-bottom: 16px;
        }

        .body1{
            margin-top: 16px;
        }

        .body2{
            display: grid;
            grid-gap: 16px;

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
    

    @media (max-width: 860px) {
        flex-direction: column !important;

        .img, iframe{ 
            margin: 0 0 24px 0 !important;
            width: 100%;
        }
        .text-part{
            max-width: unset;
            .h6{
                max-width: calc(50% - 8px);
                margin-bottom: 12px;
            }

            .body2{
                display: block;
                columns: 2;
                column-gap: 16px;

                p{
                    break-inside: avoid;
                }
            }

            .body1{
                max-width: calc(50% - 8px);
                margin-top: 12px;
            }

            .buttons{
                display: flex;
                justify-content: center;
                gap: 16px;
                margin-top: 24px;
                
                a{
                    margin: 0;
                }
            }
        }
    }

    @media (max-width: 688px) {
        .text-part{
            .buttons{
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 12px;
            }
        }
    }

    @media (max-width: 560px) {
        .text-part{
            .body2{
                display: grid;
                grid-gap: 12px;
            }

            .h6{
                max-width: 100%;
            }

            .body1{
                max-width: 100%;
            }
        }
    }

    @media (max-width: 480px) {
        .img, iframe{
            min-width: unset;
            margin-bottom: 12px !important;
        }
        .text-part{
            .h6{
                margin-bottom: 8px;
            }
            .buttons{
                margin-top: 8px;
                a{
                    width: 100%;
                    padding: 10px;
                }
            }
        }
    }
`