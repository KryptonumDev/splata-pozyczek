import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from "../../helpers/wysiwyg-modification"

export default function BigTextTiles({ data: { title, text, tiles } }) {
    return (
        <Wrapper>
            <Container>
                <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                {text
                    ? <p className="body1 subtext" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                    : null}
                <Grid>
                    {tiles.map((el) => (
                        <Item key={el.text}>
                            {el.icon
                                ? <img className="desctop" src={el.icon.localFile.publicURL} alt={el.icon.altText} />
                                : null}
                            <div className="text">
                                <div className="mobile-icon-flex">
                                    {el.icon
                                        ? <img className="mobile" src={el.icon.localFile.publicURL} alt={el.icon.altText} />
                                        : null}
                                    <h3 className="body1" dangerouslySetInnerHTML={{ __html: textParser(el.title) }} />
                                </div>
                                {el.text
                                    ? <p className="body2" dangerouslySetInnerHTML={{ __html: textParser(el.text) }} />
                                    : null}
                            </div>
                        </Item>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment bigTextTiles on WpPage_Blocks_pageBuilder {
    bigTextTiles {
      title
      text
      tiles {
        title
        text
        icon {
          altText
          localFile {
            publicURL
          }
        }
      }
    }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);

    .subtext{
        max-width: 540px;
        text-align: center;
        margin: 0 auto;
        margin-top: 16px;
        color: #6E6E70;
    }

    .h4{
        text-align: center;
        font-size: clamp(28px, 4.296875vw, 38px);

        @media (max-width: 600px){
            text-align: left;
        }
    }

    .mobile{
        display: none;
    }

    @media (max-width: 640px) {
        .mobile{
            display: block;
        }
        .desctop{
            display: none;
        }
    }

    .mobile-icon-flex{
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        width: fit-content;
        margin-bottom: 4px;
    }
`

const Grid = styled.div`
margin-top: clamp(24px, ${28 / 768 * 100}vw, 32px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: 764px) {
        grid-gap: 16px 24px;
    }

    @media (max-width: 600px){
        grid-template-columns:  1fr;
    }
`

const Item = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    padding: 10px;
    background: var(--color-white);
    box-shadow: var(--shadow);
    border-radius: 4px;

    &:first-child{
        background-color: var(--color-medium);
        .body1{
            color: #F2F4FF;
            *{
                color: #F2F4FF;
            }
            a{
                color: #FCCF4F;
            }
        }
        .body2{
            color: #DAE2FF;
            *{
                color: #F2F4FF;
            }
            a{
                color: #FCCF4F;
            }
        }
    }

    img{
        margin-right: 10px;
        width: clamp(48px, ${76 / 768 * 100}vw, 76px);
        height: clamp(48px, ${76 / 768 * 100}vw, 76px);

        @media (max-width: 640px) {
            width: 48px;
            height: 48px;
        }
    }

    .text{
        padding: 10px;
    }

    .body1{
        font-weight: 600;
        margin-right: 32px;

        @media (max-width: 1024px){
            margin-right: 0;
        }
    }

    .body2{
        color: #75757A;
        margin-right: 32px;

        @media (max-width: 1024px){
            margin-right: 0;
        }

        @media (max-width: 764px){
            font-size: 12px;
        }

        @media (max-width: 600px){
            font-size: 14px;
        }
    }

    a{
        color: #3B5BA9;
    }
`