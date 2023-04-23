import React from "react"
import styled from "styled-components"
import { Container } from "./../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'
import { graphql, Link } from "gatsby"

export default function WhatAreWeDoing({ data: { title, punkty } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                    <Grid items={punkty.length}>
                        {punkty.map(el => (
                            <Item to={el.link.url} key={el.link.title}>
                                <img src={el.icon.localFile.publicURL} alt={el.icon.altText} />
                                <p className="h6 arsenal">{el.link.title}</p>
                            </Item>
                        ))}
                    </Grid>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
fragment whatAreWeDoing on WpPage_PageBuilder_Sections_WhatAreWeDoing {
    whatAreWeDoing {
      title
      punkty {
        link{
            url
            title
        }
        icon {
          altText
          localFile{
            publicURL
          }
        }
      }
    }
}
`

const Wrapper = styled.section`
    background: var(--color-dark);
    box-shadow: var(--shadow);
    border-radius: 8px;
    padding: 40px 0;
    max-width: 1366px;
    margin: var(--section) auto 0 auto;

    @media (max-width: 900px) {
        border-radius: 0px;
    }
`

const Content = styled.div`
    .h4{
        text-align: center;
        color: var(--color-white);
        margin-bottom: clamp(24px, ${24 / 768 * 100}vw, 58px);
    }
`

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 32px;
`

const Item = styled(Link)`
    width: 12%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    transition: transform .3s cubic-bezier(0.39, 0.575, 0.565, 1);

    &:hover{
        transform: translateY(-6px);
    }

    img{
        margin-bottom: 12px;
        width: clamp(48px, ${56 / 768 * 100}vw, 76px);
        height: clamp(48px, ${56 / 768 * 100}vw, 76px);
    }

    .h6{
        text-align: center;
        color: var(--color-white);
        font-family: 'Arsenal', sans-serif;
        font-size: 20px !important;
    }

    @media (max-width: 900px) {
        width: 20%;
    }

    @media (max-width: 540px) {
        width: 25%;
    }

    @media (max-width: 420px) {
        width: 45%;
    }
`