import React from "react"
import styled from "styled-components"
import { Container } from "../atoms/container"
import { FilledButton } from '../atoms/buttons'
import { textParser } from '../../helpers/wysiwyg-modification'
import { graphql } from "gatsby"

const background = {
    'dark': 'var(--color-dark)',
    'medium': 'var(--color-medium)',
    'light': 'var(--color-light)'
}

const colors = {
    'dark': 'var(--color-white)',
    'medium': 'var(--color-white)',
    'light': '#050505'
}

export default function CallToAction({ data: { colorSchem, text, plainText, link } }) {


    return (
        <Wrapper>
            <Container>
                <Content color={colors[colorSchem]} background={background[colorSchem]}>
                    <TextPart>
                        <div className="text">
                            <p className="h6 arsenal" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                            {plainText ?
                                <p className="body1 arsenal" dangerouslySetInnerHTML={{ __html: textParser(plainText) }} />
                                : null}
                        </div>
                        <FilledButton target={link.target} to={link.url}>{link.title}</FilledButton>
                    </TextPart>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
fragment cta on WpPage_PageBuilder_Sections_Cta {
    cta {
      text
      plainText
      colorSchem
      link {
        url
        title
        target
      }
    }
}
`

const Wrapper = styled.section`
    margin-top: var(--section-spacing);
`

const Content = styled.section`
    box-shadow: var(--shadow);
    border-radius: 8px;
    background-color: ${props => props.background};
    .h6{
        color: ${props => props.color};
        font-family: 'Arsenal', sans-serif;

        *{
            color: ${props => props.color};
        }
    }

    .body1{
        color: ${props => props.color};
        
        *{
            color: ${props => props.color};
        }
    }
    
`

const TextPart = styled.div`
    max-width: clamp(484px, ${484 / 768 * 100}vw, 678px);
    padding: clamp(16px, ${20 / 768 * 100}vw, 20px);
    display: grid;
    grid-gap: clamp(16px, ${16 / 768 * 100}vw, 24px);
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    a{
        margin: 0 auto;

        @media (max-width: 450px) {
            width: 100%;
            box-sizing: border-box;
        }
    }

    .body1{
        margin-top: 4px;

        @media (max-width: 480px) {
            margin-top: 8px;
        }
    }
`