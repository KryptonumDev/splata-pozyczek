import React from "react"
import styled from "styled-components"
import { Container } from "../../atoms/container"
import { FilledButton } from '../../atoms/buttons'
import { graphql } from "gatsby"

export default function CallToAction({ data }) {
    return (
        <Wrapper>
            <Container>
                <Content color={''}>
                    <TextPart>
                        <p>{data.text}</p>
                        <FilledButton />
                    </TextPart>
                </Content>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment callToAction on WpPage {
    homepage{
        callToAction{
            text
            button{
                text
                link
            }
            colorSchem
        }
    }
  }
`

const Wrapper = styled.section`
`

const Content = styled.section`
    box-shadow: var(--shadow);
    border-radius: 8px;
    background-color: ${props => props.color};
`

const TextPart = styled.div`
    max-width: 678px;
    padding: 24px;
    display: grid;
    grid-gap: 24px;
`