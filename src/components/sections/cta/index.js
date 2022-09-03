import React from "react"
import styled from "styled-components"
import { Container } from "../../atoms/container"
import { FilledButton } from '../../atoms/buttons'
import { textParser } from '../../../helpers/wysiwyg-modification'
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

export default function CallToAction({ data: { colorSchem, text, button } }) {


    return (
        <Wrapper>
            <Container>
                <Content color={colors[colorSchem]} background={background[colorSchem]}>
                    <TextPart>
                        <p className="h6" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                        <FilledButton to={button.link}>{button.text}</FilledButton>
                    </TextPart>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
fragment cta on WpPage_Blocks_pageBuilder {
    cta {
      text
      colorSchem
      button {
        text
        link
      }
    }
}
`

const Wrapper = styled.section`
    margin-top: 80px;
`

const Content = styled.section`
    box-shadow: var(--shadow);
    border-radius: 8px;
    background-color: ${props => props.background};
    p{
        color: ${props => props.color};
    }
    
`

const TextPart = styled.div`
    max-width: 678px;
    padding: 24px;
    display: grid;
    grid-gap: 24px;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    a{
        margin: 0 auto;
    }
`