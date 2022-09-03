import React from "react"
import styled from "styled-components"
import { Container } from "./../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'
import { graphql } from "gatsby"

export default function WhatAreWeDoing({ data: { title, punkty } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <h2 className="h4" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                    <Grid items={punkty.length}>
                        {punkty.map(el => (
                            <Item key={el.text}>
                                <img src={el.icon.localFile.publicURL} alt={el.icon.altText} />
                                <p className="h6">{el.text}</p>
                            </Item>
                        ))}
                    </Grid>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
fragment whatAreWeDoing on WpPage_Blocks_pageBuilder {
    whatAreWeDoing {
      title
      punkty {
        text
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
    margin: 0 auto;
`

const Content = styled.div`
    .h4{
        text-align: center;
        color: var(--color-white);
        margin-bottom: 64px;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.items}, 1fr);
    grid-gap: 26px;
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        margin-bottom: 12px;
    }

    .h6{
        text-align: center;
        color: var(--color-white);
        font-family: 'Arsenal';
        width: min-content;
    }
`