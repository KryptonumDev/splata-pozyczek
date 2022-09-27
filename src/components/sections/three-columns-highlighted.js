import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'
import { FilledButton } from "../atoms/buttons"
import Light from './../../images/check-light.svg'

export default function ThreeColumnsHighlighted({ data: { title, points, link } }) {
    return (
        <Wrapper>
            <Container className="container">
                <h2 className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                <Content>
                    <Grid>
                        {points.map(el => (
                            <Item light={Light} dangerouslySetInnerHTML={{ __html: el.text }} />
                        ))}
                    </Grid>
                    <FilledButton className="link" target={link.target} to={link.url}>{link.title}</FilledButton>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment threeColumnsHighlighted on WpPage_Blocks_pageBuilder {
    threeColumnsHighlighted {
      title
      points {
        text
      }
      link {
        target
        title
        url
      }
    }
  }
`

const Wrapper = styled.section`
    margin-top: var(--section);

    .container{
        max-width: 1000px;
    }

    .h6{
        max-width: 380px;
    }

    .link{
        margin: 32px auto 0 auto;
    }

    @media (max-width: 480px){
        .link{
            width: 100%;
            padding: 12px;
            text-align: center;
        }
    }
`

const Content = styled.div`
    box-shadow: var(--shadow);
    border-radius: 4px;
    background-color: var(--color-light);
    padding: 24px clamp(16px, ${48 / 1920 * 100}vw, 48px);
    margin-top: 24px;

    @media (max-width: 640px) {
        width: calc(100% + clamp(32px,6.25vw,160px));
        transform: translateX(calc(clamp(16px,3.125vw,80px) * -1));
    }
`

const Grid = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: clamp(16px, ${24 / 768 * 100}vw, 32px);
`

const Item = styled.div`
    width: calc(100% / 3 - 32px);
    padding-left: 44px;
    position: relative;
    min-height: 32px;

    &::before{
        content: url(${props => props.light});
        position: absolute;
        left: 0;
        top: 0;
    }

    @media (max-width: 864px) {
        width: calc(100% / 2 - 20px);
    }

    @media (max-width: 480px) {
        width: 100%;
        padding-top: 4px;
    }
`