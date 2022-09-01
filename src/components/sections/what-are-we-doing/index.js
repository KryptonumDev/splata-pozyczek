import React from "react"
import styled from "styled-components"
import { Container } from "../../atoms/container"

export default function WhatAreWeDoing ({data}) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background: var(--color-dark);
    box-shadow: var(--shadow);
    border-radius: 8px;
`

const Content = styled.div`

`