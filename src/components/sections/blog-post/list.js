import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../../atoms/container"
import { textParser } from "../../../helpers/wysiwyg-modification"
import Light from './../../../images/check-light.svg'
import Medium from './../../../images/check-medium.svg'

export default function ListSection({ data: { title, text, subTitle, list } }) {
    return (
        <Wrapper name={textParser(title)}>
            <Container className="container">
                {title
                    ? <h2 className="h5 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                    : null}
                {text
                    ? <div className="body1 text" dangerouslySetInnerHTML={{ __html: text }} />
                    : null}
                {subTitle
                    ? <div className="body1 sub" dangerouslySetInnerHTML={{ __html: textParser(subTitle) }} />
                    : null}
                <Grid>
                    {list?.map((el, index) => (
                        <Item>
                            {index > 0
                                ? <img src={Light} alt='mark' />
                                : <img src={Medium} alt='mark' />}
                            <p className="body1" dangerouslySetInnerHTML={{ __html: textParser(el.text) }} />
                        </Item>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment list on WpPost_Blogpost_Sections_List {
    list {
        title
        text
        subTitle
        list{
            text
        }
      }
  }
`

const Wrapper = styled.section`
    padding-top: var(--section-post);
    /* padding-top: calc(var(--section-post) * 2);
    margin-top: calc(var(--section-post) * -1); */
    
    .text{
        margin-top: 16px;
        max-width: 690px;
        display: grid;
        grid-gap: 8px;

        p{
            color: #6F6F71;
        }
    }

    .sub{
        font-weight: 600;
        max-width: 500px;
        margin: 0 auto;
        margin-top: 32px;

        @media (max-width: 820px){
            margin-top: 12px;
        }
    }
`

const Grid = styled.div`
    max-width: 600px;
    margin: 16px auto 0 auto;
    display: grid;
    grid-gap: 24px 32px;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 820px) {
        grid-template-columns: 1fr;
        grid-gap: 16px;
    }

    @media (max-width: 764px){
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 480px){
        grid-template-columns: 1fr;
    }

`

const Item = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 32px auto;

    .body1{
        color: #6F6F71;
        padding-top: 5px;
    }
`