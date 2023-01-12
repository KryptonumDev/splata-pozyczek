import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../../atoms/container"
import { htmlDelete, textParser } from "../../../helpers/wysiwyg-modification"
import { InView } from "react-intersection-observer"
import { slugTransform } from "../../../helpers/slug-transform"

export default function InformPanels({ changeInView, data: { title, text, subText, panels } }) {
    return (
        <Wrapper id={slugTransform(title ? htmlDelete(title) : '')}>
            <Container className="container">
                {title
                    ? <InView onChange={(inView) => { changeInView(inView, textParser(title)) }}><h2 className="h5 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} /></InView>
                    : null}
                {text
                    ? <div className="body1 text" dangerouslySetInnerHTML={{ __html: text }} />
                    : null}
                <Grid>
                    {panels?.map(el => (
                        <Item  key={el.percent}>
                            <img src={el.icon.localFile.publicURL} alt='blue mark' />
                            <div className="content">
                                <span className="h6 arsenal">{el.percent}%</span>
                                <div className="body1" dangerouslySetInnerHTML={{ __html: el.text }} />
                            </div>
                        </Item>
                    ))}
                </Grid>
                {subText
                    ? <div className="body1 sub" dangerouslySetInnerHTML={{ __html: subText }} />
                    : null}
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment informPanels on WpPost_Blogpost_Sections_InformPanels {
    informPanels {
        title
        text
        subText
        panels{
            icon{
                altText
                localFile{
                    publicURL
                }
            }
            percent
            text
        }
      }
  }
`

const Wrapper = styled.section`
scroll-margin-top: 50px;
    padding-top: var(--section-post);
    /* padding-top: calc(var(--section-post) * 2);
    margin-top: calc(var(--section-post) * -1); */

    .text{
        margin-top: 16px;
        column-gap: 32px;
        columns: 2;

        @media (max-width: 880px) {
            columns: 1;

            * + *{
                margin-top: 16px;
            }
        }

        p{
            color: #6F6F71;
        }
    }

    .sub{
        margin-top: 24px;
        display: grid;
        grid-gap: 8px;
        p{
            color: #6F6F71;
        }
    }
`

const Grid = styled.div`
    display: grid;
    grid-gap: 24px;
    margin-top: 24px;
`

const Item = styled.div`
    border-radius: 4px;
    padding: 10px;
    box-shadow: var(--shadow);
    display: grid;
    grid-template-columns: clamp(48px, ${48 / 768 * 100}vw, 76px) auto;
    grid-gap: clamp(4px, ${4 / 768 * 100}vw, 10px);

    img{
        width: clamp(48px, ${48 / 768 * 100}vw, 76px);
        height: clamp(48px, ${48 / 768 * 100}vw, 76px);
    }

    .content{
        padding: 10px;
        .body1{
            margin-top: 4px;
        }
        p{
            color: #6F6F71;
        }
    }
`