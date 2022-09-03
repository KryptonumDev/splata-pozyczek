import React from "react"
import styled from "styled-components"
import { Container } from "../../atoms/container"

export default function Footer({ data }) {
    return (
        <Wrapper>
            <Container>
                <Content>

                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    background: #F2F4FF;
    padding: 48px 0;
`

const Content = styled.div`

`