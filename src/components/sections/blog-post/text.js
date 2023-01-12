import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../../atoms/container"
import { htmlDelete, textParser } from "../../../helpers/wysiwyg-modification"
import { InView } from "react-intersection-observer"
import { slugTransform } from "../../../helpers/slug-transform"

export default function TextSection({ changeInView, data: { title, text } }) {

    return (
        <Wrapper id={slugTransform(htmlDelete(title))}>
            <Container className="container">
                {title
                    ? <InView onChange={(inView) => { changeInView(inView, textParser(title)) }}><h2 className="h5 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} /></InView>
                    : null}
                {text
                    ? <div className="body1" dangerouslySetInnerHTML={{ __html: text }} />
                    : null}
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment textSection on WpPost_Blogpost_Sections_TextSection {
    textSection {
        title
        text
      }
  }
`

const Wrapper = styled.section`
scroll-margin-top: 50px;
    padding-top: var(--section-post);
    /* padding-top: calc(var(--section-post) * 2);
    margin-top: calc(var(--section-post) * -1); */
    .body1{
        margin-top: 16px;

        * + *{
            margin-top: 16px;
        }

        p{
            color: #6F6F71;
        }

        h3, h4, h5,h6{
            font-size: 20px;
        }
        h1,h2{
            font-size: 24px;
        }

        ul, ol{
            display: grid;
            grid-gap: 10px;
        }
    }
`